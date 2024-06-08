import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const count = contacts.length;
    console.log(`Number of contacts is: ${count}`); 
    } catch (error) {
        console.error('Error with data:', error);
    }

  
};

countContacts();
