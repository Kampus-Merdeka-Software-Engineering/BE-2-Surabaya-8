/*
  Warnings:

  - You are about to alter the column `description` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(200)`.
  - You are about to alter the column `benefits` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `Json`.
  - You are about to alter the column `thumbnail` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `VarChar(100)`.
  - You are about to alter the column `images` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(200) NOT NULL,
    MODIFY `benefits` JSON NOT NULL,
    MODIFY `thumbnail` VARCHAR(100) NOT NULL,
    MODIFY `images` JSON NOT NULL;
