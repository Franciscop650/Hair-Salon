import { users, reservations, type User, type InsertUser, type Reservation, type InsertReservation } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  getReservationById(id: number): Promise<Reservation | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private currentUserId: number;
  private currentReservationId: number;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.currentUserId = 1;
    this.currentReservationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const reservation: Reservation = { 
      ...insertReservation,
      stylist: insertReservation.stylist || null,
      specificService: insertReservation.specificService || null,
      specialRequests: insertReservation.specialRequests || null,
      newClient: insertReservation.newClient || false,
      id,
      createdAt: new Date()
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservationById(id: number): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }
}

export const storage = new MemStorage();
