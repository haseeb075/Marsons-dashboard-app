import { readMockData, writeMockData } from "../lib/mockData";

interface NoteRequest {
  text?: string;
}

export async function GET() {
  try {
    const data = await readMockData();
    return Response.json(data.notes ?? []);
  } catch {
    return Response.json({ message: "Failed to load notes" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NoteRequest;
    const text = body.text?.trim();

    if (!text) {
      return Response.json(
        { message: "Note text is required" },
        { status: 400 },
      );
    }

    const data = await readMockData();
    const notes = data.notes ?? [];
    const nextId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1;

    const newNote = {
      id: nextId,
      text,
      createdAt: new Date().toISOString(),
    };

    const updatedData = {
      ...data,
      notes: [...notes, newNote],
    };

    await writeMockData(updatedData);

    return Response.json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch {
    return Response.json({ message: "Failed to create note" }, { status: 500 });
  }
}
