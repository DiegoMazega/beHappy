import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import OrphangeView from '../views/orphanage_view';
import * as Yup from 'yup';

export default {

    async index(request: Request, response:Response){
        const orphanageRepository = getRepository(Orphanage);
        const orphanages = await  orphanageRepository.find({
            relations: ['images']
        });
        //Chama o array de DTOs do orphanage
        return response.json(OrphangeView.renderMany(orphanages));
    },

    async show(request: Request, response:Response){
        const { id } = request.params;
        const orphanageRepository = getRepository(Orphanage);
        const orphanage = await  orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });
        //Chama o Orphanage DTO do orphanage
        return  response.json(OrphangeView.render(orphanage));
    },

    async create(request: Request, response:Response){
        const{
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body

        const orphanageRepository = getRepository(Orphanage);
        
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return { path: image.filename }
        })

        const data = {
            name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required('Name/Nome Obrigatório'),
            latitude: Yup.number().required('Latitude Obrigatória'),
            longitude: Yup.number().required('Longitude Obrigatória'),
            about: Yup.string().required('About/Sobre Obrigatório').max(300),
            instructions: Yup.string().required('Instructions/Instruções Obrigatórias'),
            opening_hours: Yup.string().required('Opening_Hours/Hoario_de_Funcionamento Obrigatório'),
            open_on_weekends: Yup.boolean().required('Open_On_Weekends/Aberto_aos_FDS Obrigatório'),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required('Path/Caminho/URL Obrigatório')
            }
            ))
        });

        await schema.validate(data, {
            abortEarly: false
        })

        const orphanage = orphanageRepository.create(data)
        
        await orphanageRepository.save(orphanage);
        
        return response.status(201).json(orphanage);
    }
}