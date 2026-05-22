---
title: "FECamp 19 LMS"
description: "A Learning Management System for FECamp 19 — a 7-day engineering prep camp with 300 campers and 271 staffs across 8 houses. Covers classroom announcements, classroom file upload, Q&A, exam review, feedback, and an admin dashboard."
tech:
  [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "AWS EC2",
    "AWS S3",
    "Docker",
    "Nginx",
    "Claude Code",
  ]
github: "https://github.com/narumedsr-p"
images:
  - /images/fecamp19/1-Home.png
  - /images/fecamp19/2-MyClass.png
  - /images/fecamp19/3-Classroom(CamperView).png
  - /images/fecamp19/4-AskVCK.png
featured: true
draft: false
date: 2026-01-01
---

## Overview

FECamp 19 LMS is the internal web platform built for FECamp 19, the Faculty of Engineering's prep camp at Chulalongkorn University. The camp runs for 7 days, hosting 300 campers and 271 staffs split across 8 houses, each with their own class schedule covering 4 subjects: Math, Physics, Chemistry, and TPAT3.

The system was designed to serve around 400 concurrent users and handle everything from distributing lecture materials to tracking exam performance and collecting feedback — all within a tightly role-gated access model.

I was part of the backend team, responsible for designing and implementing the Spring Boot API, infrastructure deployment, and database management. The frontend was built separately by other team members and is not part of my contribution.

## Features

- **Multi-role access control** — 8 roles with distinct privileges enforced at the API level.
- **Classroom & material management** — 32 classrooms (8 houses × 4 subjects). Lecture files are stored on AWS S3 using a presigned-URL upload flow. VCK staff can upload and delete materials; campers can download them.
- **Announcements** — VCK staff post announcements and choose which houses to target. A LINE Chatbot notification is pushed to all campers in each targeted house on publish.
- **Q&A (Board)** — campers ask questions tagged by subject; VCK staff reply in threaded conversations with image support. Campers mark questions as resolved. Board list is filterable by subject and status.
- **Remarks (staff notes)** — staff write private notes on individual campers. An unread indicator tracks notes the viewer hasn't seen yet.
- **Exam venue announcement** — admin bulk-imports exam seat assignments (building, room, seat) via CSV. Each camper sees only their own seat.
- **Exam score review** — campers view their own Pre-Test and Post-Test scores per subject with percentile rank and aggregate cohort statistics (mean, median, SD, min/max, score range).
- **Camper info** — searchable, paginated camper directory. Admins and register staff see all campers; room staff see only their own house.
- **Staff info** — searchable, paginated staff directory filterable by house and role.
- **Feedback** — campers submit per-lecture feedback anonymously. VCK staff can read feedback only for subjects they teach.
- **BoardOffice** — admin dashboard for switching site phases (password-protected per phase) and monitoring usage stats.
- **LINE Chatbot integration** — push notifications for announcements and Q&A replies. Users link their LINE account through the chatbot by authenticating with their LMS credentials.
- **Session-based auth** — server-side sessions with in-process caching to handle ~400 concurrent users.
- **Observability** — Prometheus + Grafana monitoring stack via Docker Compose.

## Tech Stack

| Layer    | Technology                                                  |
| -------- | ----------------------------------------------------------- |
| Backend  | Spring Boot, Java, Spring Security, Spring Session          |
| Database | PostgreSQL                                                  |
| Storage  | AWS S3                                                      |
| Cache    | Caffeine                                                    |
| Frontend | Next.js, TailwindCSS, ShadCN                                |
| Infra    | AWS EC2, Docker, Docker Compose, Prometheus, Grafana, Nginx |
