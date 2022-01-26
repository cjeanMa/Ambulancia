import { Request, Response } from "express";
import { AuthResponseDTO } from "../application/auth.dto";
import { AuthRepository } from "../application/auth.repository";
import { AuthUseCase } from "../application/auth.usecase";
import { Token } from "../application/token.interface";
import { AuthOperation } from "../infraestructure/auth.operation";


const authOperation: AuthRepository = new AuthOperation();
const authUseCase = new AuthUseCase(authOperation);

export class AuthController {

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user: Token = await authUseCase.login(email, password)
        if (user)
            return res.json(user)
        else
            return res.status(401).json({ msg: "Error on application" })
    }

    async getNewAccessToken(req: Request, res: Response) {
        const { refreshToken } = req.body;
        const user: Token = await authUseCase.refreshToken(refreshToken)
        if (user)
            return res.json(user)
        else
            return res.status(401).json({ msg: "Error on application" })
    }


}