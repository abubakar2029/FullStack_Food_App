import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name: data.name || 'Elliott',
        email: data.email || 'xelliottx@example-user.com',
      },
    });

    const users = await prisma.user.findMany();
    
    return NextResponse.json({ newUser, users });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while accessing the database.' }, { status: 500 });
  }
}
