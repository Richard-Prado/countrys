-- CreateTable
CREATE TABLE "Country" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Population" INTEGER NOT NULL,
    "Image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_Name_key" ON "Country"("Name");
