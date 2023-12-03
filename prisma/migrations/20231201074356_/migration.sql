-- CreateTable
CREATE TABLE `Category` (
    `id_category` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id_products` INTEGER NOT NULL AUTO_INCREMENT,
    `id_category` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `price` INTEGER NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `benefits` VARCHAR(100) NOT NULL,
    `thumbnail` VARCHAR(100) NOT NULL,
    `images` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_products`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customers` (
    `id_customers` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `no_tlpn` VARCHAR(15) NOT NULL,
    `pesan` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id_customers`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id_transaction` INTEGER NOT NULL AUTO_INCREMENT,
    `id_customers` INTEGER NOT NULL,
    `id_products` INTEGER NOT NULL,
    `date_transaction` DATETIME(3) NOT NULL,
    `customer_count` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,

    PRIMARY KEY (`id_transaction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id_admin` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_admin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_id_customers_fkey` FOREIGN KEY (`id_customers`) REFERENCES `Customers`(`id_customers`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_id_products_fkey` FOREIGN KEY (`id_products`) REFERENCES `Products`(`id_products`) ON DELETE RESTRICT ON UPDATE CASCADE;
