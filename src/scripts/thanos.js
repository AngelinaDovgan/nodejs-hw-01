import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    
    const certainContacts = contacts.filter(() => Math.random() > 0.5); 
        
    await fs.writeFile(PATH_DB, JSON.stringify(certainContacts, null, 2), 'utf-8');
        console.log(`Trying to remove contacts from ${PATH_DB}`);
    } catch (error) {
        console.error('Error with processing...', error);
    }
};

await thanos();
