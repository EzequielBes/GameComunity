-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "username" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameTagsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "friend" (
    "id" TEXT NOT NULL,
    "profileUsername" TEXT NOT NULL,

    CONSTRAINT "friend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gamestags" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "gamestags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profile_username_key" ON "profile"("username");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_gameTagsId_fkey" FOREIGN KEY ("gameTagsId") REFERENCES "gamestags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend" ADD CONSTRAINT "friend_profileUsername_fkey" FOREIGN KEY ("profileUsername") REFERENCES "profile"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
