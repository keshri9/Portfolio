interface Column {
  key: string;
  label: string;
  className?: string;
}

interface InfoTableProps {
  columns: Column[];
  data: Record<string, string | string[]>[];
  striped?: boolean;
}

export function InfoTable({
  columns,
  data,
  striped = true,
}: InfoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 text-left font-semibold border border-blue-800 ${
                  col.className || ''
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border border-blue-200 ${
                striped && idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'
              } hover:bg-blue-100 transition-colors`}
            >
              {columns.map((col) => (
                <td
                  key={`${idx}-${col.key}`}
                  className={`px-4 py-3 text-gray-700 ${col.className || ''}`}
                >
                  {Array.isArray(row[col.key]) ? (
                    <ul className="space-y-1">
                      {(row[col.key] as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
