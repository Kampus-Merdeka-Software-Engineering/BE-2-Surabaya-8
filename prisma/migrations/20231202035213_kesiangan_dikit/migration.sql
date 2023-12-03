/*
  Warnings:

  - You are about to alter the column `username` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `password` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `nama` on the `Customers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `title` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `Admin` MODIFY `username` VARCHAR(30) NOT NULL,
    MODIFY `password` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `Category` MODIFY `name` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `Customers` MODIFY `nama` VARCHAR(50) NOT NULL,
    MODIFY `pesan` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `Products` MODIFY `title` VARCHAR(50) NOT NULL,
    MODIFY `description` VARCHAR(500) NOT NULL,
    MODIFY `benefits` VARCHAR(2000) NOT NULL,
    MODIFY `thumbnail` VARCHAR(300) NOT NULL,
    MODIFY `images` VARCHAR(2000) NOT NULL;
