import { error } from 'console';
import { readFileSync } from 'fs';
import { join } from 'path';
import sql from './utilities/sql.js';
import cashDiscount from './utilities/cashdiscount.js';
import tts from './utilities/tts.js';
import genSerialNum from './utilities/serialnumgen.js';
import uniqueSerialCHK from './utilities/uniqueserialchk.js';

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
        res.status(500).json({ error: 'Error al eliminar los datos del usuario' });
    }
};


//./INSTRUMENTS:
async function getInstruments(req, res) {
    try {
        const instruments = await sql`SELECT * FROM instruments`;
        tts('For a detailed view of our catalogue, please select one of the following.');
        res.json(instruments)
    } catch (error) {
        console.error('Error en "getInstruments":', error);
        res.status(500).json({ error: 'Error de conexión' });
    }
}

async function postInstruments(req, res) {
    const { type, brand, model, retail_price} = req.body;
    const cash_price = cashDiscount(retail_price);
    var serial_number = genSerialNum();
    while (await uniqueSerialCHK(serial_number) === false) {
        serial_number = genSerialNum();
    }
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

async function updateInstruments(req, res) {
    const { serial_number, ...updated }  = req.body;
    try {
        const [updatedInstrument] = await sql`
        UPDATE instruments
        SET ${sql(updated)}
        WHERE serial_number = ${serial_number}
        RETURNING *
        `;
        if (!updatedInstrument) {
            return res.status(404).json({ error: 'Número serial no correspondiente a ningún usuario' });
        }
        console.log('Instrumento actualizado:', serial_number);
        res.status(200).json(updateInstrument);
    } catch (error) {
        console.error('Error en "updateInstrument":', error);
        res.status(500).json({ error: 'Error al actualizar los datos del instrumento' });
    }
};

async function delInstruments(req, res) {
    const { serial_number } = req.body;
    try {
        const [instrument] = await sql`
        DELETE FROM instruments
        WHERE serial_number = ${serial_number}
        RETURNING *
        `;
        if (!serial_number) {
            return res.status(404).json({ error: 'El número serial no corresponde a ningún instrumento'});
        }
        console.log('Instrumento eliminado correctamente');
        res.status(200).json('Instrumento eliminado correctamente');

    } catch (error) {
        console.error('Error en "delInstruments":', error);
        res.status(500).json('Error al eliminar el instrumento');
    }
}

async function filterInstType(req, res) {
    const { type } = req.params;
    try {
        const filtered = await sql`
        SELECT * FROM instruments
        WHERE type = ${type}
        `;
        console.log('Instrumentos filtrados correctamente');
        res.status(200).json(filtered);
    } catch (error) {
        console.error('Error en "filterInstType":', error);
        res.status(500).json('Error al filtrar por tipo');
    }
}
async function filterInstBrand(req, res) {
    const { brand } = req.params;
    try {
        const filtered = await sql`
        SELECT * FROM instruments
        WHERE brand = ${brand}
        `;
        console.log('Instrumentos filtrados correctamente');
        res.status(200).json(filtered);
    } catch (error) {
        console.error('Error en "filterInstBrand":', error);
        res.status(500).json('Error al filtrar por marca');
    }
}
async function filterInstModel(req, res) {
    const { model } = req.params;
    try {
        const filtered = await sql`
        SELECT * FROM instruments
        WHERE model = ${model}
        `;
        console.log('Instrumentos filtrados correctamente');
        res.status(200).json(filtered);
    } catch (error) {
        console.error('Error en "filterInstModel":', error);
        res.status(500).json('Error al filtrar por modelo');
    }
}
async function filterInstPriceAsc(req, res) {
    try {
        const filtered = await sql`
        SELECT * FROM instruments
        ORDER BY retail_price ASC
        `;
        console.log(filtered)
        console.log('Instrumentos filtrados correctamente');
        res.status(200).json(filtered);
    } catch (error) {
        console.error('Error en "filterInstPriceAsc":', error);
        res.status(500).json('Error al filtrar por precio');
    }
}
async function filterInstPriceDsc(req, res) {
    try {
        const filtered = await sql`
        SELECT * FROM instruments
        ORDER BY retail_price DESC
        `;
        console.log('Instrumentos filtrados correctamente');
        res.status(200).json(filtered);
    } catch (error) {
        console.error('Error en "filterInstPriceDsc":', error);
        res.status(500).json('Error al filtrar por precio');
    }
}


export { getUsers, postUsers, updateUsers, deleteUsers,
    getInstruments, postInstruments, updateInstruments, delInstruments,
    filterInstType, filterInstBrand, filterInstModel, filterInstPriceAsc, filterInstPriceDsc
};