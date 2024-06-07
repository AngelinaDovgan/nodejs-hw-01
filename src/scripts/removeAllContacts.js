import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts);  
        
    const removeContacts = [];
        
await fs.writeFile(PATH_DB, JSON.stringify(removeContacts, null, 2), 'utf-8');
console.log(`Removing contacts from ${PATH_DB} is finished`);
    } catch (error) {
        console.error('Error with this method', error);
}
};

await removeAllContacts();
