/*
  Warnings:

  - Added the required column `level` to the `technicalUserTemp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `technicalUserTemp` ADD COLUMN `level` INTEGER NOT NULL;
