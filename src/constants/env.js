import dotenv from 'dotenv'

dotenv.config();

export const CONSTANTS = {
YES_TOKEN: process.env.CHALANG_TOKEN, 
WAITING_VOICE_CHANNEL_ID: process.env.WAITING_VOICE_CHANNEL_ID,
DEFAULT_ROLE_ID: process.env.DEFAULT_ROLE_ID, 
LOG_CHANNEL_ID: process.env.LOG_CHANNEL_ID, 
ANNOUNCEMENT_CHANNEL_ID: process.env.ANNOUNCEMENT_CHANNEL_ID, 
GUIDE_CHANNEL_ID: process.env.GUIDE_CHANNEL_ID, 
}

