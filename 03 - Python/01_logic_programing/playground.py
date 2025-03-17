# -*- coding: utf-8 -*-

import tkinter as tk

# Cria a janela principal
janela = tk.Tk()
janela.title("Hello, World!")  # Define o título da janela

# Cria um rótulo (label) com o texto "Hello, World!"
label = tk.Label(janela, text="Hello, World!", font=("Arial", 24))

# Adiciona o rótulo à janela
label.pack(padx=20, pady=20)

# Inicia o loop principal da interface gráfica
janela.mainloop()