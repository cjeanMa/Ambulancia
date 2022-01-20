import "reflect-metadata";
import {createConnection} from "typeorm";
import { Car } from "./entity/Car";
import {User} from "./entity/User";

createConnection().then(async connection => {
    
    const userRepository = await connection.getRepository(User)
    const carRepository = await connection.getRepository(Car)

    const user = await userRepository
                .createQueryBuilder("usuario")
                .where("usuario.id = :id", {id:1})
                .getSql();
    console.log(user)
/* 
    const user:any = await userRepository.find({relations:["cars"]});
    console.log(JSON.stringify(user, null, '\t')) */
    
/*     const user = new User();
    user.name = "Ramon";
    user.email ="ramon@asd.com"
    user.password ="password"
    user.photo = "photo"
    user.roles = "roles"

    const userInserted = await userRepository.save(user)

    const car =  new Car();
    car.manufacturer = "Nissan"
    car.description = "Great Car"
    car.color = "sky blue"
    car.year = 2021
    car.isSold = true
    car.user = userInserted

    const car2 =  new Car();
    car2.manufacturer = "Toyota"
    car2.description = "Great Car"
    car2.color = "dark blue"
    car2.year = 2020
    car2.isSold = true
    car2.user = userInserted

    const carInserted = await carRepository.save(car)
    const carInserted2 = await carRepository.save(car2) */


}).catch(error => console.log(error));
