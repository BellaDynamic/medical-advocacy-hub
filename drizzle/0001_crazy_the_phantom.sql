CREATE TABLE `uploaded_documents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`fileUrl` text NOT NULL,
	`fileSize` int NOT NULL,
	`mimeType` varchar(128) NOT NULL,
	`status` enum('staged','verified','merged') NOT NULL DEFAULT 'staged',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `uploaded_documents_id` PRIMARY KEY(`id`)
);
