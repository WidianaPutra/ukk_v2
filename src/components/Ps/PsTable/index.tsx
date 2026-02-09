"use client";

type PsTablePropTypes = {
  headers: string[];
  children: React.ReactNode;
};

const PsTable = ({ headers, children }: PsTablePropTypes) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-md border">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">{children}</tbody>
      </table>
    </div>
  );
};

export default PsTable;
