import { getSheetData } from '@/app/runschedule/getRunSheet';

// Type for raw sheet data (2D array of strings)
type SheetData = string[][];

// Type for a workout entry
interface WorkoutEntry {
  day: string;
  distance: string;
}

// Type for a complete week
interface WeekData {
  weekStart: string;
  weekNumber: string;
  totalDistance: string;
  saturdayRoute: string;
  thursdayDescription: string;
  days: WorkoutEntry[];
}

export default async function RunSchedulePage() {
  const data: SheetData = await getSheetData();

  const processRow = (row: string[]) => {
    const rowCopy = [...row];
    const totalDistance = rowCopy.splice(11, 1)[0];
    const saturdayRoute = rowCopy.splice(10, 1)[0];
    const thursdayDescription = rowCopy.splice(9, 1)[0];
    const weekNumber = rowCopy.splice(1, 1)[0];
    const weekStart = rowCopy.splice(0, 1)[0];

    return {
      weekStart,
      weekNumber,
      thursdayDescription,
      saturdayRoute,
      totalDistance,
      days: rowCopy,
    }
  }

  const headerData = processRow(data[0]);
  const days = headerData.days;

  const rawRows = data.slice(1);
  const body = rawRows.map(processRow);

  const bodyDays = body.map(row => row.days);
  // console.log('body:', body, 'rawRows:', rawRows, 'bodyDays:', bodyDays );

  const parseSheetDate = (dateValue: string): Date => {
    const parts = dateValue.split('/') || dateValue;

    // Handle MM/DD/YYYY format
    if (parts.length === 3) {
      const [month, day, year] = parts;
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    return new Date(dateValue);
  };

  const getThisWeekRow = (rows: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < rows.length; i++) {
      const weekStartDate = parseSheetDate(rows[i].weekStart);
      if (isNaN(weekStartDate.getTime())) continue;

      const nextWeekStart = new Date(weekStartDate);
      nextWeekStart.setDate(weekStartDate.getDate() + 7);
      if (today >= weekStartDate && today < nextWeekStart) {
        return rows[i];
      }
    }

    // Fallback to final week
    return rows[rows.length - 1] || [];
  };
  const thisWeekRow = getThisWeekRow(body);

  const currentWeekIndex = body.findIndex(row => row === thisWeekRow);

  const upcomingWeeks = currentWeekIndex >= 0
    ? body.slice(currentWeekIndex)
    : body;

  const totalWeekNumber = body.length;

  return (
    <div className={'flex flex-col items-center p-2 min-h-screen'}>
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold text-center mb-4 font-racing">Run Schedule</h1>
        <p className="text-lg mb-8 text-center max-w-md font-oswald">
          Training Schedule - Starting from Current Week
        </p>
      </div>
      <div className="flex">
        <div className='px-3 py-1 rounded-full bg-amber-300 text-black text-center cursor-pointer'>Show all</div>
      </div>

      {/* Display all weeks from current week onwards */}
      <div className="w-full max-w-4xl space-y-6">
        {upcomingWeeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className={`p-6 rounded-lg shadow-lg ${week.weekNumber === thisWeekRow.weekNumber
              ? 'bg-blue-50 border-2 border-blue-400'
              : 'bg-white'
              }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Week {week.weekNumber}
              {week.weekNumber === thisWeekRow.weekNumber && (
                <span className="ml-3 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">
                  Current Week
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Starting: {parseSheetDate(week.weekStart).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-3 text-gray-700 font-bold">Day</th>
                  <th className="text-left p-3 text-gray-700 font-bold">Distance</th>
                </tr>
              </thead>
              <tbody>
                {days.map((dayHeader, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-gray-800 font-medium">{dayHeader}</td>
                    <td className="p-3 text-gray-600">{week.days[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h4 className='text-gray-800'> <span className="font-semibold">Week Total Distance:</span> {week.totalDistance}</h4>
              <p className="text-gray-700">
                <span className="font-semibold">Workout:</span> {week.thursdayDescription}
                <span className="ml-4 font-semibold">Saturday Route:</span> {week.saturdayRoute}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}