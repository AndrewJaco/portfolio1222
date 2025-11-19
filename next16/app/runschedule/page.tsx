import { getSheetData } from '@/app/runschedule/getRunSheet';
import WeekSchedule from '@/app/runschedule/components/weekSchedule';
import { parseSheetDate } from '@/app/runschedule/utils';

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

  const days = processRow(data[0]).days;

  const rawRows = data.slice(1);
  const body = rawRows.map(processRow);

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
          Training Schedule
        </p>
      </div>

      <WeekSchedule
        allWeeks={body}
        days={days}
        thisWeekRow={thisWeekRow}
        upcomingWeeks={upcomingWeeks}
        totalWeekNumber={totalWeekNumber}
      />
    </div>
  );
}