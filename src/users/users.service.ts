import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 3,
            "name": "Alex Johnson",
            "email": "alex.johnson@example.com",
            "role": "DEVELOPER"
        },
        {
            "id": 4,
            "name": "Emily Brown",
            "email": "emily.brown@example.com",
            "role": "INTERN"
        },
        {
            "id": 5,
            "name": "Michael White",
            "email": "michael.white@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 6,
            "name": "Olivia Miller",
            "email": "olivia.miller@example.com",
            "role": "DEVELOPER"
        },
        {
            "id": 7,
            "name": "Daniel Wilson",
            "email": "daniel.wilson@example.com",
            "role": "INTERN"
        },
        {
            "id": 8,
            "name": "Sophia Davis",
            "email": "sophia.davis@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 9,
            "name": "Matthew Taylor",
            "email": "matthew.taylor@example.com",
            "role": "DEVELOPER"
        },
        {
            "id": 10,
            "name": "Emma Harris",
            "email": "emma.harris@example.com",
            "role": "INTERN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'DEVELOPER') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'DEVELOPER' }) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'DEVELOPER' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUser }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
