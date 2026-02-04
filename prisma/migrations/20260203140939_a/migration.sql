-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'WAITING',
    "image" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "adminId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Report_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Report_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ReportCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Report_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Report" ("adminId", "categoryId", "createdAt", "id", "image", "message", "status", "studentId", "updatedAt") SELECT "adminId", "categoryId", "createdAt", "id", "image", "message", "status", "studentId", "updatedAt" FROM "Report";
DROP TABLE "Report";
ALTER TABLE "new_Report" RENAME TO "Report";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
