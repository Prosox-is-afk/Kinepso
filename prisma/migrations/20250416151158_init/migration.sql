-- CreateTable
CREATE TABLE `Projets` (
    `id_projets` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_path` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `category_id` INTEGER NOT NULL,

    UNIQUE INDEX `Projets_slug_key`(`slug`),
    PRIMARY KEY (`id_projets`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryProjet` (
    `id_categoriesprojets` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_categoriesprojets` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_categoriesprojets`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Projets` ADD CONSTRAINT `Projets_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `CategoryProjet`(`id_categoriesprojets`) ON DELETE RESTRICT ON UPDATE CASCADE;
