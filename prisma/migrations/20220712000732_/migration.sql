/*
  Warnings:

  - The required column `id_adm` was added to the `technicalUserTemp` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `technicalUserTemp` ADD COLUMN `id_adm` VARCHAR(191) NOT NULL;
