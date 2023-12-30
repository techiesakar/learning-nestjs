import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
            const rolesArray = this.users.filter(user => user.role === role)
            if (rolesArray.length === 0) throw new NotFoundException("User Role Not Found")
            return rolesArray
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException("User Not Found")
        return user
    }

    create(createUserDto: CreateUserDto) {
        // const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const highestId = this.users.reduce((maxId, user) => Math.max(maxId, user.id), 0)
        const newUser = {
            id: highestId + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto }
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
