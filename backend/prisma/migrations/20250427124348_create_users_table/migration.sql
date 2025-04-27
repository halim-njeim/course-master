/*
  Warnings:

  - You are about to drop the `chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coursepdf` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userchapterprogress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usercourseprogress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userquizattempt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userresponse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `writtenanswer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `chapter` DROP FOREIGN KEY `Chapter_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `coursepdf` DROP FOREIGN KEY `CoursePdf_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `coursepdf` DROP FOREIGN KEY `CoursePdf_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `option` DROP FOREIGN KEY `Option_question_id_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_quiz_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `Quiz_chapter_id_fkey`;

-- DropForeignKey
ALTER TABLE `userchapterprogress` DROP FOREIGN KEY `UserChapterProgress_chapter_id_fkey`;

-- DropForeignKey
ALTER TABLE `userchapterprogress` DROP FOREIGN KEY `UserChapterProgress_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `usercourseprogress` DROP FOREIGN KEY `UserCourseProgress_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `usercourseprogress` DROP FOREIGN KEY `UserCourseProgress_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `userquizattempt` DROP FOREIGN KEY `UserQuizAttempt_quiz_id_fkey`;

-- DropForeignKey
ALTER TABLE `userquizattempt` DROP FOREIGN KEY `UserQuizAttempt_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `userresponse` DROP FOREIGN KEY `UserResponse_attempt_id_fkey`;

-- DropForeignKey
ALTER TABLE `userresponse` DROP FOREIGN KEY `UserResponse_question_id_fkey`;

-- DropForeignKey
ALTER TABLE `userresponse` DROP FOREIGN KEY `UserResponse_selected_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `userresponse` DROP FOREIGN KEY `UserResponse_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `writtenanswer` DROP FOREIGN KEY `WrittenAnswer_question_id_fkey`;

-- DropTable
DROP TABLE `chapter`;

-- DropTable
DROP TABLE `course`;

-- DropTable
DROP TABLE `coursepdf`;

-- DropTable
DROP TABLE `option`;

-- DropTable
DROP TABLE `question`;

-- DropTable
DROP TABLE `quiz`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `userchapterprogress`;

-- DropTable
DROP TABLE `usercourseprogress`;

-- DropTable
DROP TABLE `userquizattempt`;

-- DropTable
DROP TABLE `userresponse`;

-- DropTable
DROP TABLE `writtenanswer`;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `youtube_url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `completed_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chapters` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `course_id` BIGINT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `chapter_number` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quizzes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `chapter_id` BIGINT NOT NULL,
    `passing_score` BIGINT NOT NULL,
    `time_limit_secs` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `quiz_id` BIGINT NOT NULL,
    `question_text` VARCHAR(255) NOT NULL,
    `question_type` ENUM('MULTIPLE_CHOICE', 'SINGLE_CHOICE', 'TRUE_FALSE', 'WRITTEN') NOT NULL,
    `points` BIGINT NOT NULL,
    `question_number` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `options` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `question_id` BIGINT NOT NULL,
    `option_text` VARCHAR(255) NOT NULL,
    `options_number` BIGINT NOT NULL,
    `is_correct` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `written_answers` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `question_id` BIGINT NOT NULL,
    `answer` VARCHAR(255) NOT NULL,
    `match_percentage` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_course_progress` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `course_id` BIGINT NOT NULL,
    `completion_percentage` DOUBLE NOT NULL,
    `is_complete` BOOLEAN NOT NULL,
    `current_chapter_id` BIGINT NULL,
    `completed_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_chapter_progress` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `chapter_id` BIGINT NOT NULL,
    `completion_percentage` BIGINT NOT NULL,
    `is_complete` BOOLEAN NOT NULL,
    `completed_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_quiz_attempts` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `quiz_id` BIGINT NOT NULL,
    `score` DOUBLE NOT NULL,
    `passed` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_responses` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `attempt_id` BIGINT NOT NULL,
    `question_id` BIGINT NOT NULL,
    `selected_option_id` BIGINT NULL,
    `written_response` VARCHAR(255) NULL,
    `is_correct` BOOLEAN NOT NULL,
    `points_awarded` BIGINT NOT NULL,
    `graded_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_pdfs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `course_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `pdf_url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quizzes` ADD CONSTRAINT `quizzes_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `questions` ADD CONSTRAINT `questions_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `options` ADD CONSTRAINT `options_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `written_answers` ADD CONSTRAINT `written_answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_course_progress` ADD CONSTRAINT `user_course_progress_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_course_progress` ADD CONSTRAINT `user_course_progress_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapter_progress` ADD CONSTRAINT `user_chapter_progress_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapter_progress` ADD CONSTRAINT `user_chapter_progress_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_quiz_attempts` ADD CONSTRAINT `user_quiz_attempts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_quiz_attempts` ADD CONSTRAINT `user_quiz_attempts_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_responses` ADD CONSTRAINT `user_responses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_responses` ADD CONSTRAINT `user_responses_attempt_id_fkey` FOREIGN KEY (`attempt_id`) REFERENCES `user_quiz_attempts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_responses` ADD CONSTRAINT `user_responses_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_responses` ADD CONSTRAINT `user_responses_selected_option_id_fkey` FOREIGN KEY (`selected_option_id`) REFERENCES `options`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_pdfs` ADD CONSTRAINT `course_pdfs_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_pdfs` ADD CONSTRAINT `course_pdfs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
