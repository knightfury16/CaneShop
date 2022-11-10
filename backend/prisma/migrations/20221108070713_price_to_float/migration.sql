/*
  Warnings:

  - The values [ELECTRONICS,LAPTOP,CAMERAS,ACCESSORIES,HEADPHONES,FOOD,BOOKS,CLOTHES,BEAUTY,HEALTH,SPORTS,OUTDOORS,HOME] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Images` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rating` on the `Product` table. All the data in the column will be lost.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rating` on the `Reviews` table. All the data in the column will be lost.
  - The `id` column on the `Reviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `productId` on the `Images` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `ratings` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `productId` on the `Reviews` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('Electronics', 'Laptop', 'Cameras', 'Accessories', 'Headphones', 'Food', 'Books', 'Clothes', 'Beauty', 'Health', 'Sports', 'Outdoors', 'Home');
ALTER TABLE "Product" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_productId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_productId_fkey";

-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "rating",
ADD COLUMN     "ratings" DOUBLE PRECISION NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_pkey",
DROP COLUMN "rating",
ADD COLUMN     "ratings" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
