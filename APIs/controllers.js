import { error } from 'console';
import { readFileSync } from 'fs';
import { join } from 'path';
import sql from './utilities/sql.js';
import cashDiscount from './utilities/cashdiscount.js';

async function getUsers(req, res) {
    try {
        const users = await sql`SELECT * FROM userdata`;
        res.json(users);
    } catch (error) {
        console.error('Error en "getUsers":', error);
        res.status(500).json({ error: 'Error de conexión' });
    }
}

async function postUsers(req, res) {
    const { id, username, email, age } = req.body;
    try {
        const [newUser] = await sql`
        INSERT INTO userdata (id, username, email, age)
        VALUES (${id}, ${username}, ${email}, ${age})
        RETURNING *
        `;
        console.log('Usuario registrado:', { username });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error en "postUser":', error);
        res.status(500).json({ error: 'Error en la creación de un nuevo usuario' });
    }
};

async function updateUsers(req, res) {
    const { id, ...updated } = req.body;
    try {
        const [updatedUser] = await sql`
        UPDATE userdata
        SET ${sql(updated)}
        WHERE id = ${id}
        RETURNING *
        `;
        if (!updatedUser) {
            return res.status(404).json({ error: 'ID no correspondiente a ningún usuario' });
        }
        console.log('Usuario actualizado:', id);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error en "updateUsers":', error);
        res.status(500).json({ error: 'Error al actualizar los datos del usuario ' });
    }
};

async function deleteUsers(req, res) {
    const { id } = req.body;
    try {
        const [deletedUser] = await sql`
        DELETE FROM userdata
        WHERE id = ${id}
        RETURNING *
        `;
        if (!deletedUser) {
            return res.status(404).json({ error: 'ID no correspondiente a ningún usuario' });
        }

        console.log('Usuario eliminado');
        res.status(200).send('Usuario eliminado correctamente');
    } catch (error) {
        console.error('Error en "deleteUsers":', error);
        res.status(500).json({ error: 'Error al actualizar los datos del usuario' });
    }
};


//./INSTRUMENTS:
async function getInstruments(req, res) {
    try {
        const instruments = await sql`SELECT * FROM instruments`;
        res.json(instruments)
    } catch (error) {
        console.error('Error en "getInstruments":', error);
        res.status(500).json({ error: 'Error de conexión' });
    }
}
    await getInstruments(req, res);
    tts('For a detailed view of our catalogue, please select one of the following.');

async function postInstruments(req, res) {
    const { serial_number, type, brand, model, retail_price} = req.body;
    export const retail_price
    const cash_price = await cashDiscount(retail_price);
    try {
        const [newInstrument] = await sql`
        INSERT INTO instruments (serial_number, type, brand, model, retail_price, cash_price)
        VALUES (${serial_number}, ${type}, ${brand}, ${model}, ${retail_price}, ${cash_price})
        RETURNING *
        `
        console.log('Instrumento publicado:', newInstrument);
        res.status(201).json(newInstrument);
    } catch (error) {
        console.error('Error en "postInstruments":', error);
        res.status(500).json({ error: 'Error al publicar instrumento' });
    }
}

async function getInstBass(req, res) {

}

export { getUsers, postUsers, updateUsers, deleteUsers, getInstruments, postInstruments, getInstBass, getInstGuitar, getInstKeys };