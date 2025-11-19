'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { parseSheetDate } from '@/app/runschedule/utils';

export default function WeekSchedule({ allWeeks, days, thisWeekRow, upcomingWeeks, totalWeekNumber }) {
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  const visibleWeeks = showAllWeeks ? allWeeks : upcomingWeeks; return (
    <div className="w-full max-w-4xl space-y-6">
      <div>
        <button
          onClick={() => setShowAllWeeks(!showAllWeeks)}
          className="px-3 py-1 rounded-full bg-secondary-100 text-dark text-center cursor-pointer hover:bg-secondary-100/80"
        >
          {showAllWeeks ? 'Show upcoming weeks' : 'Show all'}
        </button>
      </div>

      {visibleWeeks.map((week, weekIndex) => (
        <div
          key={weekIndex}
          className={`p-6 rounded-lg shadow-lg text-xl ${week.weekNumber === thisWeekRow.weekNumber
            ? 'bg-blue-50 border-2 border-secondary-400'
            : 'bg-white'
            }`}
        >
          <div className="mb-4">
            <div className="flex items-baseline space-x-4 mb-2">
              <h2 className="text-2xl font-bold text-dark">
                Week {week.weekNumber}</h2>
              <p className='text-sm text-dark/90'>{week.weekNumber} / {totalWeekNumber}</p>
              {week.weekNumber === thisWeekRow.weekNumber && (
                <p className="ml-3 text-sm bg-secondary-400 text-white px-3 py-1 rounded-full self-center">
                  Current Week
                </p>
              )}
              <button onClick={() => console.log('printed the schedule')} className="ml-auto w-7 h-7 flex items-center justify-center text-light rounded-full bg-primary-400 hover:bg-primary-400/80 cursor-pointer">
                <FontAwesomeIcon icon={faPrint} className='text-xs' />
              </button>

            </div>
            <p className="text-sm text-gray-600 mb-4">
              {parseSheetDate(week.weekStart).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm text-bg-dark border-b-2 border-gray-300">
                <th className="text-left p-3 font-bold">Day</th>
                <th className="text-left p-3 font-bold">Distance</th>
              </tr>
            </thead>
            <tbody>
              {days.map((dayHeader, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-dark font-medium">{dayHeader}</td>
                  <td className="p-3 text-dark/70">{week.days[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 text-xl text-dark flex flex-col items-center">
            <h4 className='mb-2'> <span className="font-semibold">Week Total Distance:</span> {week.totalDistance}</h4>
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className='bg-secondary-500 rounded-full flex items-center justify-center text-center px-3 py-1 w-fit'>
                <span className="font-semibold hidden sm:inline ">Workout:</span> {week.thursdayDescription}</div>
              <div className='bg-secondary-100 rounded-full text-center px-3 py-1 w-fit '>
                <span className="font-semibold hidden sm:inline">Saturday Route:</span> {week.saturdayRoute || 'TBD'}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}