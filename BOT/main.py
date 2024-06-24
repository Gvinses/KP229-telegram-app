import telebot
from telebot import types
from telegram import Chat
import httpx
import os

bot = telebot.TeleBot('7295713770:AAFyqD90Wto-QyalJiM2zBdJhZGVFPtOvqY')

@bot.message_handler(commands=['start']) 
def main_message(message):

    video = open('D:\\KP229\\Blend\\Coin.gif', 'rb')
    caption = '<b>Привет</b>, это официальный бот KP229 для майнинга KP_coin просто за. <b>Клики!</b> Сколько стоит KP_coin - никто не знает.  Нажми "start" рядом с клавиатурой'
    bot.send_video(message.chat.id, video, caption=caption, parse_mode='html')
        
    with open('D:\\KP229\\TeleBot\\users.txt', 'a', encoding='utf-8') as file:
            file.write(f"Name: {message.from_user.first_name} {message.from_user.last_name}\n")
            file.write(f"Username: {message.from_user.username}\n")
            file.write(f"ID: {message.from_user.id}\n")
            file.write(f"message ID: {message.chat.id, message.id}\n")
            file.write(f"location: {message.location}\n")
            file.write("-----------------\n")
    with open('D:\\KP229\\TeleBot\\messages.txt', 'a', encoding='utf-8') as file:
            file.write(f"All message: {message.chat.id, message}")
            file.write(f"His Name: {message.from_user.first_name} {message.from_user.last_name}\n")
            file.write(f"His Username: {message.from_user.username}\n")
            file.write("-----------------\n")


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