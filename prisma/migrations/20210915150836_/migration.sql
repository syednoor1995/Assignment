/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
ADD COLUMN     "Category" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_Category_fkey" FOREIGN KEY ("Category") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
