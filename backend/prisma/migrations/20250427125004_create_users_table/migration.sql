/*
  Warnings:

  - You are about to alter the column `created_at` on the `course_pdfs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `courses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `completed_at` on the `courses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `completed_at` on the `user_chapter_progress` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `completed_at` on the `user_course_progress` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `graded_at` on the `user_responses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `updated_at` to the `chapters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `course_pdfs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `quizzes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_chapter_progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_course_progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_quiz_attempts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `written_answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chapters` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `course_pdfs` ADD COLUMN `updated_at` DATETIME NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `updated_at` DATETIME NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `completed_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `options` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `questions` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `quizzes` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `user_chapter_progress` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL,
    MODIFY `completed_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `user_course_progress` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL,
    MODIFY `completed_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `user_quiz_attempts` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `user_responses` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL,
    MODIFY `graded_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `written_answers` ADD COLUMN `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME NOT NULL;
