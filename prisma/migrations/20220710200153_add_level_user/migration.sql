/*
  Warnings:

  - Added the required column `level` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `level` INTEGER NOT NULL;
