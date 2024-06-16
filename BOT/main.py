import telebot
from telebot import types
from telegram import Chat
import httpx
import os

# DONT SAVE IT!!!!!!!
bot = telebot.TeleBot('7295713770:AAFyqD90Wto-QyalJiM2zBdJhZGVFPtOvqY')
# DONT SAVE IT!!!!!!!


@bot.message_handler(commands=['start']) 
def main_message(message):

    video = open('D:\\KP229\\Blend\\Coin.gif', 'rb')
    caption = '<b>Привет</b>, это официальный бот KP229 для майнинга KP_coin просто за. <b>Клики!</b> Сколько стоит KP_coin - никто не знает.  Нажми "start" рядом с клавиатурой'
    bot.send_video(message.chat.id, video, caption=caption, parse_mode='html')


@bot.message_handler(commands=['pingUS'])
def send_welcome(message: types.Message):
    if message.chat.type == 'private':
        bot.send_message(message.chat.id, "Эта команда работает только в группах.")
    else:
        username = bot.send_message(message.chat.id, 'Введите имя пользователя без @')
        bot.register_next_step_handler(username, get_name)

def get_name(message: types.Message):
    username = message.text
    times = bot.send_message(message.chat.id, f'Количество повторений')
    bot.register_next_step_handler(times, get_times, username)

def get_times(message: types.Message, username):
    times = int(message.text)
    message_to_ping = bot.send_message(message.chat.id, f'Введите сообщение для повторений')
    bot.register_next_step_handler(message_to_ping, pinging, username, times)

def pinging(message: types.Message, username, times):
    message_text = message.text
    for i in range(times):
        bot.send_message(message.chat.id, f"@{username} {message_text}")

bot.polling(none_stop=True)