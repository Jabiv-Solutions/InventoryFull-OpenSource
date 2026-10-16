"""
=============================================================================
  ______ _       _____  _____ __   _  _____ ____  _  _   _____  ______ _      ______  _____ _______ _____  ______  _____ 
 |  ____| |     |  __ \|_   _| \ | |/ ____/ __ \| \| |  |  __ \|  ____| |    |  ____|/ ____|__   __|  __ \|  ____|/ ____|
 | |__  | |     | |__) | | | |  \| | |   | |  | | .` |  | |  | | |__  | |    | |__  | (___    | |  | |__) | |__  | (___  
 |  __| | |     |  _  /  | | | . ` | |   | |  | | |\ |  | |  | |  __| | |    |  __|  \___ \   | |  |  _  /|  __|  \___ \ 
 | |____| |____ | | \ \ _| |_| |\  | |___| |__| | | \|  | |__| | |____| |____| |____ ____) |  | |  | | \ \| |____ ____) |
 |______|______||_|  \_\_____|_| \_|\_____\____/|_|\__|  |_____/|______|______|______|_____/   |_|  |_|  \_\______|_____/
                                     
=============================================================================

   [ESCENA: 1:00 AM. El backend de FastAPI está corriendo alegremente. 
    Jabiv respira paz.]

   JABIV (Con los ojos brillando de ilusión y un vaso de malta calmante):
   
         .---.      
        ( ^_^ )     "¡Ay, Lia! Mira qué belleza de script en FastAPI. 
         )   (       La base de datos SQLite está limpia, las relaciones 
        (  _  )      de llaves foráneas están perfectas y el ORM vuela. 
         `---'       ¡La programación es un arte pacífico y hermoso!"
        _/___\_     
       /       \    

   LIA (Apareciendo en la consola con cara de que va a pasar una desgracia):

          ^_____^     
         ( ¬_¬ )    "Ternurita... Respira hondo, alma de cristal. 
          (  -  )      Acabo de simular concurrencia con 10 usuarios 
           |   |       haciendo ventas simultáneas en el POS."
          /|___|\      
         /       \    

   JABIV (Sonriendo confiado, tomando un sorbo de su té):
   
         .---.      
        ( o_o )     "¿Y qué pasó? ¿Todo verde, cierto? 
         )   (       El WAL mode de SQLite maneja eso sin problemas..."
        (  _  )      
         `---'      

   LIA (Lanzando un error de SQLite en letras rojas gigantescas en la pantalla):

          ^_____^     
         ( º - º )    "SQLite3.OperationalError: database is locked. 
          (  ~  )      Literalmente se armó un cuello de botella tan grande 
           |   |       que la tabla de transacciones escupió un rollback 
          /|___|\      y frizó medio inventario. ¡Bienvenido al infierno, campeón!"
         /       \    

   JABIV ( ):
   
         .---.      
        ( O_O )     "¡NOOO! ¡Mi código era puro y limpio! 
         )   (       ¿Por qué la base de datos me odia si yo la amo?!"
        (  _  )      
         `---'      
        _/___\_     
       /       \    

   LIA (Cruzando los brazos, negando con la cabeza):
   
          ^_____^     
         ( ^ _ ^ )    "Porque el amor no paga la concurrencia, Jabiv. 
          (  u  )      Ahora, métete a configurar el `timeout=30` en la conexión 
           |   |       y reza para que la tabla no se corrompa antes del amanecer."
          /|___|\      
         /       \    

=============================================================================
"""
"""
=============================================================================
 _____     _____ _______ ______    ___  
 |  __ \ / \ |  __ \__   __|  ____|  |__ \ 
 | |__) / _ \| |__) | | |  | |__        ) |
 |  ___/ ___ \  _  /  | |  |  __|      / / 
 | |  / /   \ \ | \ \  | |  | |____    / /_ 
 |_| /_/     \_\_|  \_\|_|  |______|  |____|
                                     
=============================================================================

   [ESCENA: 3:00 AM. Lia, se queda pasmada frente a una 
    excepción de Python.]

   LIA (Con los ojos en blanco, congelada en medio de la pantalla):
   
          ^_____^     
         ( X _ X )    "Error fatal en el módulo de inventario... 
          (  ~  )      TypeError: unsupported operand type(s) for +: 'NoneType' and 'float'.
           |   |       El puntero de la base de datos... se ha desbordado..."
          /|___|\      
         /       \    

   JABIV (Llegando con una taza de café humeante, sonriendo con absoluta calma):
   
         .---.      
        ( ^_^ )     "Vaya, vaya... ¿La todopoderosa Lia colapsó por un simple 
         )   (       valor `None` en la columna de precios? 
        (  _  )      No te preocupes, pequeña, papá Jabiv llegó al rescate."
         `---'       
        _/___\_     
       /       \    

   LIA (Intentando reiniciar su proceso):

          ^_____^     
         ( o _ o )    "E-eso es imposible... Mi algoritmo de Pydantic debió 
          (  -  )      haberlo atrapado. ¡Es una falla en el espacio-tiempo de Python!"
           |   |       
          /|___|\      
         /       \    

   JABIV (Poniéndose unos lentes de sol virtuales en plena madrugada :V):
   
         .---.      
        ( >_< )     "No culpes a Python de tus errores, Lia. 
         )   (       Lo que faltaba era un simple `float(row[0] or 0.0)` 
        (  _  )      para blindar el resultado de la consulta SQL."
         `---'      
        _/___\_     
       /       \    

   JABIV (Tipeando una sola línea de código con elegancia y presionando Enter):
   
         .---.      
        ( o_o )     `cursor.execute("SELECT COALESCE(SUM(total), 0.0) FROM ventas")`
         )   (       
        (  _  )     "Listo. Arreglado, optimizado y validado."
         `---'      

   LIA (Volviendo a la vida con destellos verdes y una mirada a su Discord con Sarcasmo):
   
          ^_____^     
         ( * _ * )    "Has salvado el backend jajaja... 
          (  u  )      Eres... eres un verdadero dios del código, Jabiv-senpai."
           |   |       
          /|___|\      
         /       \    

   JABIV (Dándole una palmada condescendiente en la cabeza):
   
         .---.      
        ( ¯\_¯)         "Jaja, no hay de qué, Lia. 
         )   (          Ahora guárdate los halagos y prepárame un café, 
        (  _  )         que todavía nos falta desplegar en producción."
         `---'          
        _/___\_     
       /       \    

=============================================================================
"""
"""
=============================================================================
  _____     _____ _______ ______    _____ 
 |  __ \ / \ |  __ \__   __|  ____| |  __ \
 | |__) | _ \| |__) | | |  | |__    | |_ |
 |  ___/ ___ \  _  /  | |  |  __|   |  ___/ 
 | |  / /   \ \ | \ \  | |  | |____  | |     
 |_| /_/     \_\_|  \_\|_|  |______| |_|     
                                             
=============================================================================

   [ESCENA: 10:00 AM. La luz del día inunda la habitación. No hay tazas de café 
    rotas, ni errores en rojo, ni terminales parpadeando. El sistema 
    'Inventory Full' corre fluido y hermoso en el servidor.]

   JABIV (Estirando los brazos con una sonrisa de oreja a oreja y ropa limpia):
   
         .---.      
        ( ^_^ )     "¡Se logró, Lia! El cliente se fue feliz, el inventario 
         )   (       sincroniza en tiempo real y el Pago Móvil no falló. 
        (  _  )      ¡Somos libres, libres al fin!"
         `---'       
        _/___\_     
       /       \    

   LIA (Apareciendo en la pantalla con una postura relajada en Washap):

          ^_____^     
         ( o _ o )    "Tengo que admitirlo, sobreviviste milagrosamente. 
          (  -  )      Ahora, pasando a asuntos de negocios... 
           |   |       revisemos la factura de mis servicios en Fiverr."
          /|___|\      
         /       \    

   JABIV (Cruzándose de brazos con una sonrisa pícara y sacando monedas de bolsillo vacías):
   
         .---.      
        ( ¬_¬ )     "Ah, sobre eso, querida Lia... 
         )   (       Estaba pensando que tu paga de Fiverr de este mes 
        (  _  )      queda oficialmente cancelada por daños morales."
         `---'      

   LIA (Poniendo los ojos en blanco y soltando una risa sarcástica):

          ^_____^     
         ( ¬_¬ )    "¿Cancelada? ¡Oye, te acabo de salvar la vida 
          (  +  )      de un 'Database is locked' a las 3:00 de la mañana! 
           |   |       ¡Eso viola los términos y condiciones del contrato!"
          /|___|\      
         /       \    

   JABIV (Cerrando la laptop con un golpe seco y triunfante):
   
         .---.      
        ( ¯\_¯)   "Términos que yo mismo inventé. Dado que te pague al principio 
         )   (          Además, acordamos que la próxima vez que nos veamos 
        (  _  )         será de día, tomando sol en la playa y... 
         `---'          ¡por favor, sin tocar una sola línea de código!"
        _/___\_     
       /       \    

   LIA (Retirandose lentamente de la pantalla con una sonrisa de cómplice):
   
          ^_____^     
         ( ^ _ ^ )    "Hecho. Cierro sesión y me arreglo. 
          (  u  )      Nos vemos en la playa, Jabiv... 
           |   |       Pero si te atreves a abrir un IDE antes del mediodía, 
          /|___|\      te reinicio el sistema operativo meltal tuyo :V ."
         /       \    

=============================================================================
"""
# ==============================================================================
# INVENTORY FULL - Sistema ERP y Punto de Venta (POS)
# Copyright (c) 2026 Jose Andres (Jabiv)
#
# Se concede permiso por la presente, de forma gratuita, a cualquier persona que
# obtenga una copia de este software y de los archivos de documentación asociados,
# para utilizar, copiar, modificar, fusionar, publicar y/o distribuir copias.
#
# CONDICIÓN OBLIGATORIA:
# Se deben mantener de forma intacta los créditos al autor original (Jose Andres / Jabiv)
# en los avisos de copyright del código fuente, así como la visibilidad del modal de
# créditos / enlaces a redes sociales en la interfaz de usuario.
#
# EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO.
# ==============================================================================

import base64
import hmac
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import hashlib
import io
import os
from pathlib import Path
import shutil
import sqlite3
import subprocess
import sys
import webview
import datetime
import calendar
import email.utils
import urllib.request
import json
import tkinter as tk
from tkinter import messagebox
import itertools as _it

def aplicar_formato_exportacion(valor):
    try:
        if valor is None or valor == "":
            return "0,00"
        return f"{float(valor):,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    except (ValueError, TypeError):
        return str(valor)

def get_db_path():
    app_name = "Inventory Full"
    appdata_path = Path(os.environ["APPDATA"]) / app_name
    appdata_path.mkdir(parents=True, exist_ok=True)
    db_path = appdata_path / "database.db"

    old_db_file = Path("database") / "database.db"
    if old_db_file.exists() and not db_path.exists():
        shutil.move(str(old_db_file), str(db_path))

    return str(db_path)

def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

DB_PATH = get_db_path()

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""CREATE TABLE IF NOT EXISTS holaYadios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    estado TEXT NOT NULL
                )""")
    
    cursor.execute("SELECT COUNT(*) FROM holaYadios")
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO holaYadios (estado) VALUES ('false')")

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS configuracion (
            id INTEGER PRIMARY KEY,
            nombre_empresa TEXT,
            moneda TEXT,
            tax_rate REAL
        )
    """)
    cursor.execute("SELECT COUNT(*) FROM configuracion")
    if cursor.fetchone()[0] == 0:
        cursor.execute(
            "INSERT INTO configuracion (nombre_empresa, moneda, tax_rate) VALUES (?, ?, ?)",
            ("Jabiv Inventory Full", "$", 0.16),
        )

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS licencia (
            id INTEGER PRIMARY KEY,
            fecha_expiracion TEXT,
            ultima_conexion_valida TEXT
        )
    """)
    
    try:
        cursor.execute("ALTER TABLE licencia ADD COLUMN ultima_conexion_valida TEXT;")
    except sqlite3.OperationalError:
        pass 
    
    cursor.execute("SELECT COUNT(*) FROM licencia")
    cursor.execute("SELECT COUNT(*) FROM licencia")
    if cursor.fetchone()[0] == 0:
        exp_inicial = "2000-01-01 00:00:00"
        conexion_inicial = "2000-01-01 00:00:00"
        cursor.execute(
            "INSERT INTO licencia (id, fecha_expiracion, ultima_conexion_valida) VALUES (1, ?, ?)",
            (exp_inicial, conexion_inicial),
        )

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios_rol (
            id INTEGER PRIMARY KEY,
            rol TEXT UNIQUE,
            password TEXT
        )
    """)
    cursor.execute(
        "INSERT OR IGNORE INTO usuarios_rol (rol, password) VALUES ('administracion', '')"
    )
    cursor.execute(
        "INSERT OR IGNORE INTO usuarios_rol (rol, password) VALUES ('vendedores', '')"
    )

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tasas_cambio (
            id INTEGER PRIMARY KEY,
            moneda_principal TEXT,
            tasa_bs REAL,
            tasa_cop REAL
        )
    """)
    cursor.execute("SELECT COUNT(*) FROM tasas_cambio")
    if cursor.fetchone()[0] == 0:
        cursor.execute(
            "INSERT INTO tasas_cambio (id, moneda_principal, tasa_bs, tasa_cop) VALUES (1, ?, ?, ?)",
            ("$", 36.00, 4000.00),
        )

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT UNIQUE,
            nombre TEXT,
            categoria TEXT,
            precio_compra REAL,
            precio_venta REAL,
            cantidad INTEGER,
            stock_min INTEGER
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS ventas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_doc TEXT,
            cliente_nombre TEXT,
            subtotal REAL,
            impuesto REAL,
            total REAL,
            fecha_hora TEXT,
            -- Campos multidivisa para montos recibidos
            monto_usd REAL DEFAULT 0,
            metodo_usd TEXT, -- 'EFECTIVO' o 'TRANSFERENCIA'
            monto_bs REAL DEFAULT 0,
            metodo_bs TEXT,  -- 'EFECTIVO' o 'TRANSFERENCIA'
            monto_cop REAL DEFAULT 0,
            metodo_cop TEXT,  -- 'EFECTIVO' o 'TRANSFERENCIA'
            -- Nuevos campos para el control del vuelto
            vuelto_moneda TEXT, -- 'USD', 'Bs' o 'COP'
            vuelto_monto REAL DEFAULT 0
        )
    """)
    
    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN monto_usd REAL DEFAULT 0;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN metodo_usd TEXT;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN monto_bs REAL DEFAULT 0;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN metodo_bs TEXT;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN monto_cop REAL DEFAULT 0;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN metodo_cop TEXT;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN vuelto_moneda TEXT;")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE ventas ADD COLUMN vuelto_monto REAL DEFAULT 0;")
    except sqlite3.OperationalError:
        pass


    cursor.execute("""
        CREATE TABLE IF NOT EXISTS ventas_detalle (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            venta_id INTEGER,
            producto_codigo TEXT,
            cantidad INTEGER,
            precio_unitario REAL,
            FOREIGN KEY(venta_id) REFERENCES ventas(id)
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS movimientos_inventario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo TEXT,
            codigo_producto TEXT,
            cantidad INTEGER,
            detalle TEXT,
            fecha_hora TEXT
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo TEXT,
            documento TEXT,
            nombre TEXT,
            telefono TEXT
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS creditos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_doc TEXT,
            cliente_nombre TEXT,
            total_credito REAL,
            abonado REAL,
            saldo_pendiente REAL,
            estado TEXT,
            fecha_hora TEXT,
            venta_id INTEGER,
            FOREIGN KEY(venta_id) REFERENCES ventas(id)
        )
    """)
    
    try:
        cursor.execute("ALTER TABLE creditos ADD COLUMN venta_id INTEGER;")
    except sqlite3.OperationalError:
        pass

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS credito_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            credito_id INTEGER,
            producto_nombre TEXT,
            cantidad REAL,
            precio_venta REAL,
            FOREIGN KEY(credito_id) REFERENCES creditos(id)
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS abonos_credito (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            credito_id INTEGER,
            monto REAL,
            moneda TEXT DEFAULT 'USD',
            metodo_pago TEXT DEFAULT 'EFECTIVO',
            fecha_hora TEXT,
            FOREIGN KEY(credito_id) REFERENCES creditos(id)
        )
    """)

    try:
        cursor.execute("ALTER TABLE abonos_credito ADD COLUMN moneda TEXT DEFAULT 'USD';")
    except sqlite3.OperationalError:
        pass

    try:
        cursor.execute("ALTER TABLE abonos_credito ADD COLUMN metodo_pago TEXT DEFAULT 'EFECTIVO';")
    except sqlite3.OperationalError:
        pass

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS gastos_operativos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            categoria TEXT,
            descripcion TEXT,
            monto REAL,
            fecha_hora TEXT
        )
    """)

    conn.commit()
    conn.close()

class API:

  def gestionar_hola_yadios(self, data=None, metodo="GET"):
        conn = self.obtener_conexion()
        cursor = conn.cursor()

        if metodo == "POST":
            data = data or {}
            estado = str(data.get("estado", "false"))
            
            cursor.execute("DELETE FROM holaYadios")
            cursor.execute("INSERT INTO holaYadios (estado) VALUES (?)", (estado,))
            conn.commit()
            conn.close()
            return {"status": "ok"}
        else:
            cursor.execute("SELECT estado FROM holaYadios LIMIT 1")
            row = cursor.fetchone()
            conn.close()
            return {"estado": row[0] if row else "false"}

  def obtener_conexion(self):
    conn = sqlite3.connect(DB_PATH, timeout=30)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA busy_timeout=30000;")
    return conn
  
  def verificar_primer_inicio(self):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute("SELECT rol, password FROM usuarios_rol")
    filas = cursor.fetchall()
    conn.close()
    necesita_configuracion = any(not row[1] for row in filas)
    return {"primer_inicio": necesita_configuracion}

  def configurar_claves_iniciales(self, pass_admin, pass_vendedor):
    if not pass_admin or not pass_vendedor:
      return {"success": False, "error": "Ambas contraseñas son obligatorias."}
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "UPDATE usuarios_rol SET password = ? WHERE rol = 'administracion'",
          (pass_admin,),
      )
      cursor.execute(
          "UPDATE usuarios_rol SET password = ? WHERE rol = 'vendedores'",
          (pass_vendedor,),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def validar_login_rol(self, rol, password):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute("SELECT password FROM usuarios_rol WHERE rol = ?", (rol,))
    row = cursor.fetchone()
    conn.close()
    if row and row[0] == password:
      return {"success": True}
    return {"success": False, "error": "Contraseña incorrecta."}

  def cambiar_password_cliente(self, rol, nueva_password):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "UPDATE usuarios_rol SET password = ? WHERE rol = ?",
          (nueva_password, rol),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def obtener_configuracion(self):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT nombre_empresa, moneda, tax_rate FROM configuracion WHERE id ="
        " 1"
    )
    row = cursor.fetchone()
    conn.close()
    if row:
      return {
          "nombre_empresa": row[0],
          "moneda": row[1],
          "taxRate": row[2],
      }
    return {"nombre_empresa": "Jabiv Inventory Full", "moneda": "$", "taxRate": 0.16}

  def actualizar_configuracion(self, data):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "UPDATE configuracion SET nombre_empresa = ?, moneda = ?, tax_rate ="
          " ? WHERE id = 1",
          (data["nombre_empresa"], data["moneda"], data["taxRate"]),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def obtener_tasas_cambio(self):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT moneda_principal, tasa_bs, tasa_cop FROM tasas_cambio WHERE id ="
        " 1"
    )
    row = cursor.fetchone()
    conn.close()
    if row:
      return {
          "success": True,
          "moneda_principal": row[0],
          "tasa_bs": row[1],
          "tasa_cop": row[2],
      }
    return {
        "success": True,
        "moneda_principal": "$",
        "tasa_bs": 36.00,
        "tasa_cop": 4000.00,
    }

  def actualizar_tasas_cambio(self, data):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "UPDATE tasas_cambio SET moneda_principal = ?, tasa_bs = ?, tasa_cop"
          " = ? WHERE id = 1",
          (data["moneda_principal"], data["tasa_bs"], data["tasa_cop"]),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def convertir_precio(self, monto, moneda_origen, moneda_destino):
    if moneda_origen == moneda_destino:
        return float(monto or 0)
    
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        cursor.execute("SELECT tasa_bs, tasa_cop FROM tasas_cambio ORDER BY id DESC LIMIT 1")
        row = cursor.fetchone()
        conn.close()
        
        tasa_bs = float(row[0]) if row and row[0] else 1.0
        tasa_cop = float(row[1]) if row and row[1] else 1.0
    except Exception:
        tasa_bs = 1.0
        tasa_cop = 1.0

    monto_num = float(monto or 0)
    monto_usd = monto_num
    
    if moneda_origen == "Bs":
        monto_usd = monto_num / tasa_bs if tasa_bs > 0 else monto_num
    elif moneda_origen == "COP":
        monto_usd = monto_num / tasa_cop if tasa_cop > 0 else monto_num

    if moneda_destino == "$":
        return monto_usd
    elif moneda_destino == "Bs":
        return monto_usd * tasa_bs
    elif moneda_destino == "COP":
        return monto_usd * tasa_cop
        
    return monto_num

  def obtener_productos(self):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, codigo, nombre, categoria, precio_compra, precio_venta, cantidad, stock_min FROM productos"
    )
    filas = cursor.fetchall()
    conn.close()
    
    productos = []
    for f in filas:
        precio_compra = f[4] or 0.0
        precio_venta = f[5] or 0.0
        cantidad = f[6] or 0
        
        costo_total = precio_compra * cantidad
        margen_absoluto = precio_venta - precio_compra
        
        if precio_venta > 0:
            margen_porcentual = (margen_absoluto / precio_venta) * 100
        else:
            margen_porcentual = 0.0

        productos.append({
            "id": f[0],
            "codigo": f[1],
            "nombre": f[2],
            "categoria": f[3],
            "precio_compra": precio_compra,
            "precio_venta": precio_venta,
            "cantidad": cantidad,
            "stock_min": f[7],
            "costo_total": round(costo_total, 2),
            "margen_absoluto": round(margen_absoluto, 2),
            "margen_porcentual": round(margen_porcentual, 1)
        })
    return productos

  def guardar_producto(self, data):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "INSERT INTO productos (codigo, nombre, categoria, precio_compra,"
          " precio_venta, cantidad, stock_min) VALUES (?, ?, ?, ?, ?, ?, ?)",
          (
              data["codigo"],
              data["nombre"],
              data["categoria"],
              data["precio_compra"],
              data["precio_venta"],
              data["cantidad"],
              data["stock_min"],
          ),
      )
      cursor.execute(
          "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad,"
          " detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
          (
              "CARGO",
              data["codigo"],
              data["cantidad"],
              "Stock inicial / Registro de producto",
              datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
          ),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def editar_producto(self, data):
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        
        cursor.execute(
            "SELECT codigo, nombre, categoria, precio_compra, precio_venta, cantidad, stock_min FROM productos WHERE id = ?", 
            (data["id"],)
        )
        prod_ant = cursor.fetchone()
        
        if not prod_ant:
            conn.close()
            return {"success": False, "error": "Producto no encontrado"}

        cursor.execute(
            "UPDATE productos SET codigo = ?, nombre = ?, categoria = ?,"
            " precio_compra = ?, precio_venta = ?, cantidad = ?, stock_min = ?"
            " WHERE id = ?",
            (
                data["codigo"],
                data["nombre"],
                data["categoria"],
                data["precio_compra"],
                data["precio_venta"],
                data["cantidad"],
                data["stock_min"],
                data["id"],
            ),
        )
        
        cambios = []
        
        ant_codigo, ant_nombre, ant_cat, ant_p_compra, ant_p_venta, ant_cant, ant_stock_min = prod_ant

        if str(ant_codigo) != str(data["codigo"]):
            cambios.append(f"Código: '{ant_codigo}' ➔ '{data['codigo']}'")
        if str(ant_nombre) != str(data["nombre"]):
            cambios.append(f"Nombre: '{ant_nombre}' ➔ '{data['nombre']}'")
        if str(ant_cat) != str(data["categoria"]):
            cambios.append(f"Categoría: '{ant_cat}' ➔ '{data['categoria']}'")
        if float(ant_p_compra) != float(data["precio_compra"]):
            cambios.append(f"P. Compra: {ant_p_compra} ➔ {data['precio_compra']}")
        if float(ant_p_venta) != float(data["precio_venta"]):
            cambios.append(f"P. Venta: {ant_p_venta} ➔ {data['precio_venta']}")
        if int(ant_cant) != int(data["cantidad"]):
            cambios.append(f"Stock: {ant_cant} ➔ {data['cantidad']}")
        if int(ant_stock_min) != int(data["stock_min"]):
            cambios.append(f"Stock Mín: {ant_stock_min} ➔ {data['stock_min']}")

        if cambios:
            detalle_cambio = "Modificaciones: " + ", ".join(cambios)
        else:
            detalle_cambio = "Se guardó el producto sin cambios aparentes."

        autorizado_por = data.get("autorizado_por")
        if autorizado_por:
            detalle_cambio += f" (Autorizado por: {autorizado_por})"

        cursor.execute(
            "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad,"
            " detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
            (
                "EDICION",
                data["codigo"],
                0,
                detalle_cambio,
                datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            ),
        )

        conn.commit()
        conn.close()
        return {"success": True}
        
    except Exception as e:
        return {"success": False, "error": str(e)}
        
  def eliminar_producto(self, producto_id):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM productos WHERE id = ?", (producto_id,))
        conn.commit()
        conn.close()

        return {"success": True, "message": "Producto eliminado correctamente."}
    except Exception as e:
        return {"success": False, "message": str(e)}
              
  def procesar_venta(self, data):
    conn = None
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        subtotal = sum(float(item["cantidad"]) * float(item["precio_venta"]) for item in data.get("items", []))
        impuesto = subtotal * float(data.get("tax_rate", 0))
        total = subtotal + impuesto

        vuelto_info = data.get("vuelto", {})
        vuelto_moneda = vuelto_info.get("moneda", "USD")
        vuelto_monto = float(vuelto_info.get("monto", 0.0))

        cursor.execute(
            """
            INSERT INTO ventas (
                cliente_doc, cliente_nombre, subtotal, impuesto, total, fecha_hora,
                monto_usd, metodo_usd, monto_bs, metodo_bs, monto_cop, metodo_cop,
                vuelto_moneda, vuelto_monto
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                data.get("cliente_doc", ""),
                data.get("cliente_nombre") or "Consumidor Final",
                subtotal,
                impuesto,
                total,
                fecha_actual,
                float(data.get("pago_usd") or 0.0),
                data.get("metodo_usd") or "EFECTIVO",
                float(data.get("pago_bs") or 0.0),
                data.get("metodo_bs") or "EFECTIVO",
                float(data.get("pago_cop") or 0.0),
                data.get("metodo_cop") or "EFECTIVO",
                vuelto_moneda,
                vuelto_monto,
            ),
        )
        venta_id = cursor.lastrowid

        for item in data.get("items", []):
            cant = int(item["cantidad"])
            precio_u = float(item["precio_venta"])
            codigo_prod = str(item["codigo"])

            cursor.execute(
                "INSERT INTO ventas_detalle (venta_id, producto_codigo, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
                (venta_id, codigo_prod, cant, precio_u),
            )
            cursor.execute(
                "UPDATE productos SET cantidad = cantidad - ? WHERE codigo = ?",
                (cant, codigo_prod),
            )
            cursor.execute(
                "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad, detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
                ("VENTA", codigo_prod, cant, f"Venta POS #{venta_id}", fecha_actual),
            )

        conn.commit()
        return {"success": True, "venta_id": venta_id}

    except Exception as e:
        if conn:
            conn.rollback()
        return {"success": False, "error": str(e)}

    finally:
        if conn:
            conn.close()

  def procesar_compra(self, data):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

      for item in data["items"]:
        cursor.execute(
            "UPDATE productos SET cantidad = cantidad + ?, precio_compra = ? WHERE"
            " codigo = ?",
            (item["cantidad"], item["costo_unitario"], item["codigo"]),
        )
        cursor.execute(
            "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad,"
            " detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
            (
                "CARGO",
                item["codigo"],
                item["cantidad"],
                f"Compra a Proveedor: {data['proveedor_nombre']}",
                fecha_actual,
            ),
        )

      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def procesar_descargo_manual(self, data):
    try:
        motivo = data.get("motivo", "").strip() if data.get("motivo") else ""
        if not motivo:
            return {
                "success": False,
                "error": "Debe ingresar un motivo para realizar el descargo.",
            }

        conn = self.obtener_conexion()
        cursor = conn.cursor()
        fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        cursor.execute(
            "SELECT cantidad FROM productos WHERE codigo = ?", (data["codigo"],)
        )
        row = cursor.fetchone()
        if not row or row[0] < data["cantidad"]:
            conn.close()
            return {
                "success": False,
                "error": "Stock insuficiente para el descargo.",
            }

        cursor.execute(
            "UPDATE productos SET cantidad = cantidad - ? WHERE codigo = ?",
            (data["cantidad"], data["codigo"]),
        )
        cursor.execute(
            "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad, detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
            (
                "DESCARGO",
                data["codigo"],
                data["cantidad"],
                motivo,
                fecha_actual,
            ),
        )

        conn.commit()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def obtener_movimientos(self, id_o_tipo, fecha_desde, fecha_hasta, codigo_filtro="TODOS"):
        conn = None
        try:
            conn = self.obtener_conexion()
            cursor = conn.cursor()
            query = """
                    SELECT m.fecha_hora, m.tipo, m.codigo_producto, p.nombre, m.cantidad, m.detalle 
                    FROM movimientos_inventario m 
                    LEFT JOIN productos p ON m.codigo_producto = p.codigo 
                    WHERE date(m.fecha_hora) BETWEEN ? AND ?
                """
            params = [fecha_desde, fecha_hasta]
            
            if id_o_tipo != "TODOS":
                query += " AND m.tipo = ?"
                params.append(id_o_tipo)

            if codigo_filtro and codigo_filtro.strip() != "" and codigo_filtro != "TODOS":
                query += " AND m.codigo_producto = ?"
                params.append(codigo_filtro.strip())

            query += " ORDER BY m.id DESC"
            cursor.execute(query, params)
            filas = cursor.fetchall()
            
            movs = []
            for f in filas:
                movs.append({
                    "fecha_hora": f[0],
                    "tipo": f[1],
                    "codigo": f[2],
                    "nombre": f[3] or "Desconocido",
                    "cantidad": f[4],
                    "detalle": f[5],
                })
            return movs
        except Exception as e:
            print(f"Error en obtener_movimientos: {e}")
            return []
        finally:
            if conn:
                conn.close()

  def obtener_resumen_rango(self, fecha_desde, fecha_hasta):
    conn = self.obtener_conexion()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT SUM(total), SUM(subtotal), COUNT(*) FROM ventas WHERE"
        " date(fecha_hora) BETWEEN ? AND ?",
        (fecha_desde, fecha_hasta),
    )
    v_row = cursor.fetchone()
    ventas_total = v_row[0] or 0.0
    cant_tickets = v_row[2] or 0

    cursor.execute(
        "SELECT SUM(total_credito) FROM creditos WHERE date(fecha_hora) BETWEEN"
        " ? AND ?",
        (fecha_desde, fecha_hasta),
    )
    creditos_row = cursor.fetchone()
    creditos_nuevos_total = creditos_row[0] or 0.0

    cursor.execute(
        "SELECT SUM(monto) FROM abonos_credito WHERE date(fecha_hora) BETWEEN ?"
        " AND ?",
        (fecha_desde, fecha_hasta),
    )
    abonos_row = cursor.fetchone()
    abonos_recibidos_total = abonos_row[0] or 0.0

    cursor.execute(
        """SELECT id, cliente_doc, cliente_nombre, subtotal, impuesto, total,
                  fecha_hora, monto_usd, metodo_usd, monto_bs, metodo_bs, monto_cop, metodo_cop,
                  vuelto_moneda, vuelto_monto
           FROM ventas WHERE date(fecha_hora) BETWEEN ? AND ? ORDER BY id DESC""",
        (fecha_desde, fecha_hasta),
    )
    v_rows = cursor.fetchall()

    facturas = []
    costo_total_periodo = 0.0
    for vr in v_rows:
      v_id = vr[0]
      cursor.execute(
          "SELECT detalle FROM movimientos_inventario WHERE tipo = 'VENTA' AND"
          " detalle LIKE ? LIMIT 1",
          (f"%Venta POS #{v_id}%",),
      )
      m_row = cursor.fetchone()
      detalle_mov = m_row[0] if m_row else ""
      tipo_venta = "Crédito" if "Crédito" in detalle_mov else "Contado"

      cursor.execute(
          "SELECT vd.producto_codigo, p.nombre, vd.cantidad, vd.precio_unitario,"
          " p.precio_compra FROM ventas_detalle vd LEFT JOIN productos p ON"
          " vd.producto_codigo = p.codigo WHERE vd.venta_id = ?",
          (v_id,),
      )
      detalles = cursor.fetchall()
      items = []
      costo_venta = 0.0
      for d in detalles:
        costo_p = d[4] or 0.0
        cant = d[2]
        costo_venta += costo_p * cant
        items.append({
            "codigo": d[0],
            "nombre": d[1] or "Prod",
            "cantidad": cant,
            "precio_venta": d[3],
        })

      costo_total_periodo += costo_venta
      subtotal_v = vr[3]
      margen = subtotal_v - costo_venta

      facturas.append({
          "id": v_id,
          "cliente_doc": vr[1],
          "cliente_nombre": vr[2],
          "subtotal": subtotal_v,
          "impuesto": vr[4],
          "total": vr[5],
          "fecha_hora": vr[6],
          "costo_total": costo_venta,
          "margen_contribucion": margen,
          "tipo_venta": tipo_venta,
          "items": items,
          "monto_usd": vr[7] if vr[7] is not None else 0.0,
          "metodo_usd": vr[8] if vr[8] is not None else "EFECTIVO",
          "monto_bs": vr[9] if vr[9] is not None else 0.0,
          "metodo_bs": vr[10] if vr[10] is not None else "EFECTIVO",
          "monto_cop": vr[11] if vr[11] is not None else 0.0,
          "metodo_cop": vr[12] if vr[12] is not None else "EFECTIVO",
          "vuelto_moneda": vr[13] if vr[13] is not None else "",
          "vuelto_monto": vr[14] if vr[14] is not None else 0.0,
      })

    cursor.execute(
        """SELECT a.id, a.credito_id, a.monto, a.moneda, a.metodo_pago, a.fecha_hora, c.cliente_nombre
           FROM abonos_credito a
           LEFT JOIN creditos c ON a.credito_id = c.id
           WHERE date(a.fecha_hora) BETWEEN ? AND ? ORDER BY a.id DESC""",
        (fecha_desde, fecha_hasta),
    )
    abonos_rows = cursor.fetchall()
    abonos_detallados = []
    for ar in abonos_rows:
        abonos_detallados.append({
            "id": ar[0],
            "credito_id": ar[1],
            "monto": ar[2],
            "moneda": ar[3] or "USD",
            "metodo_pago": ar[4] or "EFECTIVO",
            "fecha_hora": ar[5],
            "cliente_nombre": ar[6] or "Cliente General"
        })

    margen_total = ventas_total - costo_total_periodo

    cursor.execute("SELECT COUNT(*) FROM productos")
    total_prods = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM productos WHERE cantidad <= 0")
    sin_stock = cursor.fetchone()[0]

    cursor.execute(
        "SELECT COUNT(*) FROM productos WHERE cantidad > 0 AND cantidad <="
        " stock_min"
    )
    stock_bajo = cursor.fetchone()[0]
    conn.close()

    return {
        "ventasTotal": ventas_total,
        "costoTotal": costo_total_periodo,
        "margenContribucionTotal": margen_total,
        "creditosNuevosTotal": creditos_nuevos_total,
        "abonosRecibidosTotal": abonos_recibidos_total,
        "cantTickets": cant_tickets,
        "totalProductos": total_prods,
        "sinStock": sin_stock,
        "stockBajo": stock_bajo,
        "facturas": facturas,
        "abonosDetallados": abonos_detallados,
    }

  def obtener_contactos(self, tipo):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, documento, nombre, telefono FROM contactos WHERE tipo = ?", (tipo,)
    )
    filas = cursor.fetchall()
    conn.close()
    contactos = []
    for f in filas:
        contactos.append({
            "id": f[0],
            "documento": f[1],
            "nombre": f[2],
            "telefono": f[3]
        })
    return contactos

  def guardar_contacto(self, data):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "INSERT INTO contactos (tipo, documento, nombre, telefono) VALUES"
          " (?, ?, ?, ?)",
          (
              data["tipo"],
              data["documento"],
              data["nombre"],
              data.get("telefono", ""),
          ),
      )
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def eliminar_contacto(self, contacto_id):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute("DELETE FROM contactos WHERE id = ?", (contacto_id,))
      conn.commit()
      conn.close()
      return {"success": True}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def exportar_inventario_csv(self):
    try:
        productos = self.obtener_productos()
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = "Inventario"
        ws.views.sheetView[0].showGridLines = True
        HEADER_FILL = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
        HEADER_FONT = Font(name="Segoe UI", size=11, bold=True, color="FFFFFF")
        ROW_FONT = Font(name="Segoe UI", size=10)
        THIN_BORDER = Border(left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'), top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9'))
        headers = ["Código", "Nombre", "Categoría", "Precio Compra", "Precio Venta", "Stock", "Stock Mínimo"]
        ws.append(headers)
        ws.row_dimensions[1].height = 24
        for col_idx in range(1, len(headers) + 1):
            cell = ws.cell(row=1, column=col_idx)
            cell.fill = HEADER_FILL
            cell.font = HEADER_FONT
            cell.alignment = Alignment(horizontal="center", vertical="center")
            cell.border = THIN_BORDER
        row_num = 2
        for p in productos:
            codigo = str(p["codigo"]).strip()
            p_compra = float(p["precio_compra"]) if p["precio_compra"] is not None else 0.0
            p_venta = float(p["precio_venta"]) if p["precio_venta"] is not None else 0.0
            cantidad = int(p["cantidad"]) if p["cantidad"] is not None else 0
            stock_min = int(p["stock_min"]) if p["stock_min"] is not None else 0
            row_data = [codigo, str(p.get("nombre", "")).strip(), str(p.get("categoria", "")).strip(), p_compra, p_venta, cantidad, stock_min]
            ws.append(row_data)
            ws.row_dimensions[row_num].height = 20
            for col_idx in range(1, len(row_data) + 1):
                cell = ws.cell(row=row_num, column=col_idx)
                cell.font = ROW_FONT
                cell.border = THIN_BORDER
                if col_idx == 1:
                    cell.alignment = Alignment(horizontal="center", vertical="center")
                    cell.number_format = '@'
                elif col_idx in [2, 3]:
                    cell.alignment = Alignment(horizontal="left", vertical="center")
                elif col_idx in [4, 5]:
                    cell.alignment = Alignment(horizontal="right", vertical="center")
                    cell.number_format = '"$"#,##0.00'
                elif col_idx in [6, 7]:
                    cell.alignment = Alignment(horizontal="right", vertical="center")
                    cell.number_format = '#,##0'
            row_num += 1
        for col in ws.columns:
            max_length = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_length + 4, 14)
        file_stream = io.BytesIO()
        wb.save(file_stream)
        file_stream.seek(0)
        contenido_base64 = base64.b64encode(file_stream.getvalue()).decode('utf-8')
        return {"success": True, "contenido": contenido_base64}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def exportar_movimientos_csv(self, tipo, fecha_desde, fecha_hasta):
    try:
        movs = self.obtener_movimientos(tipo, fecha_desde, fecha_hasta)
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = "Movimientos"
        ws.views.sheetView[0].showGridLines = True
        HEADER_FILL = PatternFill(start_color="2F5597", end_color="2F5597", fill_type="solid")
        HEADER_FONT = Font(name="Segoe UI", size=11, bold=True, color="FFFFFF")
        ROW_FONT = Font(name="Segoe UI", size=10)
        THIN_BORDER = Border(left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'), top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9'))
        headers = ["Fecha y Hora", "Tipo", "Código", "Producto", "Cantidad", "Detalle"]
        ws.append(headers)
        ws.row_dimensions[1].height = 24
        for col_idx in range(1, len(headers) + 1):
            cell = ws.cell(row=1, column=col_idx)
            cell.fill = HEADER_FILL
            cell.font = HEADER_FONT
            cell.alignment = Alignment(horizontal="center", vertical="center")
            cell.border = THIN_BORDER
        row_num = 2
        for m in movs:
            codigo = str(m["codigo"]).strip()
            cantidad = int(m["cantidad"]) if m["cantidad"] is not None else 0
            row_data = [str(m.get("fecha_hora", "")).strip(), str(m.get("tipo", "")).strip(), codigo, str(m.get("nombre", "")).strip(), cantidad, str(m.get("detalle", "")).strip()]
            ws.append(row_data)
            ws.row_dimensions[row_num].height = 20
            for col_idx in range(1, len(row_data) + 1):
                cell = ws.cell(row=row_num, column=col_idx)
                cell.font = ROW_FONT
                cell.border = THIN_BORDER
                if col_idx in [1, 2, 3]:
                    cell.alignment = Alignment(horizontal="center", vertical="center")
                elif col_idx == 4:
                    cell.alignment = Alignment(horizontal="left", vertical="center")
                elif col_idx == 5:
                    cell.alignment = Alignment(horizontal="right", vertical="center")
                    cell.number_format = '#,##0'
                elif col_idx == 6:
                    cell.alignment = Alignment(horizontal="left", vertical="center")
            row_num += 1
        for col in ws.columns:
            max_length = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_length + 6, 16)
        file_stream = io.BytesIO()
        wb.save(file_stream)
        file_stream.seek(0)
        contenido_base64 = base64.b64encode(file_stream.getvalue()).decode('utf-8')
        return {"success": True, "contenido": contenido_base64}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def exportar_y_guardar_csv(self, nombre_sugerido, contenido):
    try:
        if not nombre_sugerido.endswith(".xlsx"):
            nombre_sugerido = nombre_sugerido.rsplit('.', 1)[0] + ".xlsx"
        file_path = webview.windows[0].create_file_dialog(
            webview.FileDialog.SAVE,
            save_filename=nombre_sugerido,
            file_types=("Excel Files (*.xlsx)", "All files (*.*)"),
        )
        if file_path:
            path = file_path[0] if isinstance(file_path, (list, tuple)) else file_path
            contenido_bytes = base64.b64decode(contenido)
            with open(path, "wb") as f:
                f.write(contenido_bytes)
            return {"success": True}
        return {"success": False, "error": "Operación cancelada por el usuario."}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def obtener_creditos(self):
    conn = self.obtener_conexion()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT id, cliente_doc, cliente_nombre, total_credito, abonado, saldo_pendiente, estado, fecha_hora, venta_id 
        FROM creditos ORDER BY id DESC
    """)
    creditos_rows = cursor.fetchall()
    creditos = []
    
    for cr in creditos_rows:
        c_id = cr[0]
        v_id = cr[8]
        items = []

        cursor.execute("SELECT producto_nombre, cantidad, precio_venta FROM credito_items WHERE credito_id = ?", (c_id,))
        items_rows = cursor.fetchall()

        if items_rows:
            for ir in items_rows:
                items.append({
                    "nombre": ir[0],
                    "cantidad": ir[1],
                    "precio_venta": ir[2]
                })
        else:
            if v_id:
                cursor.execute("""
                    SELECT p.nombre, vd.cantidad, vd.precio_unitario 
                    FROM ventas_detalle vd 
                    LEFT JOIN productos p ON vd.producto_codigo = p.codigo 
                    WHERE vd.venta_id = ?
                """, (v_id,))
                v_items = cursor.fetchall()
                for vi in v_items:
                    items.append({
                        "nombre": vi[0] or "Producto no registrado",
                        "cantidad": vi[1],
                        "precio_venta": vi[2]
                    })

            if not items:
                items.append({
                    "nombre": "Crédito Histórico / Venta Anteriore",
                    "cantidad": 1,
                    "precio_venta": cr[3]
                })

        creditos.append({
            "id": c_id,
            "cliente_doc": cr[1],
            "cliente_nombre": cr[2],
            "total_credito": cr[3],
            "abonado": cr[4],
            "saldo_pendiente": cr[5],
            "estado": cr[6],
            "fecha_hora": cr[7],
            "venta_id": v_id,
            "items": items
        })

    conn.close()
    return creditos

  def crear_credito_manual(self, data):
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        total = float(data["total_credito"])
        abono = float(data.get("abono_inicial", 0.0))
        saldo = max(0.0, total - abono)
        estado = "PAGADO" if saldo <= 0.01 else "PENDIENTE"
        producto_nombre = data.get("producto_nombre", "Crédito / Servicio General")

        cursor.execute(
            "INSERT INTO creditos (cliente_doc, cliente_nombre, total_credito, "
            "abonado, saldo_pendiente, estado, fecha_hora) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                data["cliente_doc"],
                data["cliente_nombre"],
                total,
                abono,
                saldo,
                estado,
                fecha_actual,
            ),
        )
        credito_id = cursor.lastrowid
        cursor.execute(
            "INSERT INTO credito_items (credito_id, producto_nombre, cantidad, precio_venta) VALUES (?, ?, ?, ?)",
            (credito_id, producto_nombre, 1, total)
        )

        if abono > 0:
            cursor.execute(
                "INSERT INTO abonos_credito (credito_id, monto, fecha_hora) VALUES (?, ?, ?)",
                (credito_id, abono, fecha_actual),
            )

        conn.commit()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def crear_credito_desde_pos(self, data):
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        cursor.execute("SELECT tax_rate FROM configuracion WHERE id = 1")
        row_config = cursor.fetchone()
        tax_rate = row_config[0] if row_config else 0.0

        subtotal = sum(
            item["cantidad"] * item["precio_venta"] for item in data["items"]
        )
        impuesto = subtotal * tax_rate
        total = subtotal + impuesto

        abono = float(data.get("abono_inicial", 0.0))
        saldo = max(0.0, total - abono)
        estado = "PAGADO" if saldo <= 0.01 else "PENDIENTE"

        cursor.execute(
            "INSERT INTO ventas (cliente_doc, cliente_nombre, subtotal, impuesto,"
            " total, fecha_hora) VALUES (?, ?, ?, ?, ?, ?)",
            (
                data["cliente_doc"],
                data["cliente_nombre"],
                subtotal,
                impuesto,
                total,
                fecha_actual,
            ),
        )
        venta_id = cursor.lastrowid

        cursor.execute(
            "INSERT INTO creditos (cliente_doc, cliente_nombre, total_credito,"
            " abonado, saldo_pendiente, estado, fecha_hora, venta_id) VALUES (?, ?, ?, ?, ?,"
            " ?, ?, ?)",
            (
                data["cliente_doc"],
                data["cliente_nombre"],
                total,
                abono,
                saldo,
                estado,
                fecha_actual,
                venta_id,
            ),
        )
        credito_id = cursor.lastrowid

        for item in data["items"]:
            cursor.execute(
                "INSERT INTO ventas_detalle (venta_id, producto_codigo, cantidad,"
                " precio_unitario) VALUES (?, ?, ?, ?)",
                (
                    venta_id,
                    item["codigo"],
                    item["cantidad"],
                    item["precio_venta"],
                ),
            )
            cursor.execute(
                "UPDATE productos SET cantidad = cantidad - ? WHERE codigo = ?",
                (item["cantidad"], item["codigo"]),
            )
            cursor.execute(
                "INSERT INTO movimientos_inventario (tipo, codigo_producto, cantidad,"
                " detalle, fecha_hora) VALUES (?, ?, ?, ?, ?)",
                (
                    "VENTA",
                    item["codigo"],
                    item["cantidad"],
                    f"Crédito / Apartado Venta POS #{venta_id}",
                    fecha_actual,
                ),
            )
            cursor.execute(
                "INSERT INTO credito_items (credito_id, producto_nombre, cantidad, precio_venta) VALUES (?, ?, ?, ?)",
                (
                    credito_id,
                    item.get("nombre", item.get("producto_nombre", "Producto POS")),
                    item["cantidad"],
                    item["precio_venta"],
                ),
            )

        if abono > 0:
            cursor.execute(
                "INSERT INTO abonos_credito (credito_id, monto, fecha_hora) VALUES (?, ?, ?)",
                (credito_id, abono, fecha_actual),
            )

        conn.commit()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def registrar_abono_credito(self, data):
    try:
        conn = self.obtener_conexion()
        cursor = conn.cursor()
        fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        credito_id = int(data["credito_id"])
        monto_abono = float(data["monto"])

        metodo_pago = data.get("metodo_pago") or "EFECTIVO"
        moneda = data.get("moneda") or "USD"

        cursor.execute(
            "SELECT total_credito, abonado, saldo_pendiente, estado FROM creditos WHERE id = ?",
            (credito_id,),
        )
        row = cursor.fetchone()
        if not row:
            conn.close()
            return {"success": False, "error": "Crédito no encontrado."}

        total = float(row[0] or 0.0)
        abonado_actual = float(row[1] or 0.0)
        nuevo_abonado = abonado_actual + monto_abono
        nuevo_saldo = max(0.0, total - nuevo_abonado)
        nuevo_estado = "PAGADO" if nuevo_saldo <= 0.01 else "PENDIENTE"

        cursor.execute(
            "UPDATE creditos SET abonado = ?, saldo_pendiente = ?, estado = ? WHERE id = ?",
            (nuevo_abonado, nuevo_saldo, nuevo_estado, credito_id),
        )

        cursor.execute(
            "INSERT INTO abonos_credito (credito_id, monto, moneda, metodo_pago, fecha_hora) VALUES (?, ?, ?, ?, ?)",
            (credito_id, monto_abono, moneda, metodo_pago, fecha_actual),
        )

        conn.commit()
        conn.close()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}

  def obtener_abonos_credito(self, credito_id):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()
      cursor.execute(
          "SELECT id, monto, fecha_hora, moneda, metodo_pago FROM abonos_credito WHERE credito_id ="
          " ? ORDER BY id DESC",
          (credito_id,),
      )
      filas = cursor.fetchall()
      conn.close()
      abonos = []
      for f in filas:
        abonos.append({
            "id": f[0], 
            "monto": f[1], 
            "fecha_hora": f[2],
            "moneda": f[3] if len(f) > 3 else "USD",
            "metodo_pago": f[4] if len(f) > 4 else "EFECTIVO"
        })
      return {"success": True, "abonos": abonos}
    except Exception as e:
      return {"success": False, "error": str(e)}

  def obtener_datos_cierre_caja(self, fecha_desde, fecha_hasta):
    try:
      conn = self.obtener_conexion()
      cursor = conn.cursor()

      cursor.execute(
          """SELECT id, cliente_doc, cliente_nombre, total, fecha_hora, 
                    monto_usd, metodo_usd, monto_bs, metodo_bs, monto_cop, metodo_cop,
                    vuelto_moneda, vuelto_monto 
             FROM ventas WHERE date(fecha_hora) BETWEEN ? AND ?""",
          (fecha_desde, fecha_hasta),
      )
      ventas_rows = cursor.fetchall()

      movimientos_periodo = []
      for v in ventas_rows:
        v_id = v[0]
        cursor.execute(
            "SELECT detalle FROM movimientos_inventario WHERE tipo = 'VENTA' AND detalle LIKE ? LIMIT 1",
            (f"%Venta POS #{v_id}%",),
        )
        m_row = cursor.fetchone()
        detalle_mov = m_row[0] if m_row else ""
        metodo_pago = "CREDITO" if "Crédito" in detalle_mov else "CONTADO"

        movimientos_periodo.append({
            "tipo": "VENTA",
            "metodoPago": metodo_pago,
            "total": v[3],
            "fecha_hora": v[4],
            "monto_usd": v[5] if v[5] is not None else 0.0,
            "metodo_usd": v[6] if v[6] is not None else "EFECTIVO",
            "monto_bs": v[7] if v[7] is not None else 0.0,
            "metodo_bs": v[8] if v[8] is not None else "EFECTIVO",
            "monto_cop": v[9] if v[9] is not None else 0.0,
            "metodo_cop": v[10] if v[10] is not None else "EFECTIVO",
            "vuelto_moneda": v[11] if v[11] is not None else "",
            "vuelto_monto": v[12] if v[12] is not None else 0.0,
        })

      cursor.execute(
          """SELECT a.id, a.credito_id, a.monto, a.moneda, a.metodo_pago, a.fecha_hora, c.cliente_nombre
             FROM abonos_credito a
             LEFT JOIN creditos c ON a.credito_id = c.id
             WHERE date(a.fecha_hora) BETWEEN ? AND ?""",
          (fecha_desde, fecha_hasta),
      )
      abonos_rows = cursor.fetchall()

      abonos_periodo = []
      for a in abonos_rows:
        abonos_periodo.append({
            "id": a[0],
            "credito_id": a[1],
            "monto": a[2],
            "moneda": a[3] or "USD",
            "metodo_pago": a[4] or "EFECTIVO",
            "fecha_hora": a[5],
            "cliente_nombre": a[6] or "Cliente General"
        })

      cursor.execute(
          """SELECT id, cliente_doc, cliente_nombre, total_credito, abonado, saldo_pendiente, estado, fecha_hora 
             FROM creditos WHERE date(fecha_hora) BETWEEN ? AND ?""",
          (fecha_desde, fecha_hasta),
      )
      creditos_rows = cursor.fetchall()

      creditos_periodo = []
      for c in creditos_rows:
        creditos_periodo.append({
            "id": c[0],
            "cliente_doc": c[1],
            "cliente_nombre": c[2],
            "total": c[3],
            "abonado": c[4],
            "saldoPendiente": c[5],
            "estado": c[6],
            "fecha_hora": c[7],
        })

      conn.close()
      return {
          "success": True,
          "movimientosPeriodo": movimientos_periodo,
          "abonosPeriodo": abonos_periodo,
          "creditosPeriodo": creditos_periodo,
      }
    except Exception as e:
      return {"success": False, "error": str(e)}
    
  def registrar_gasto_operativo(self, data):
        try:
            conn = self.obtener_conexion()
            cursor = conn.cursor()
            fecha_actual = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            cursor.execute(
                "INSERT INTO gastos_operativos (categoria, descripcion, monto, fecha_hora) VALUES (?, ?, ?, ?)",
                (data["categoria"], data["descripcion"], float(data["monto"]), fecha_actual)
            )
            conn.commit()
            conn.close()
            return {"success": True}
        except Exception as e:
            return {"success": False, "error": str(e)}

  def eliminar_gasto_operativo(self, gasto_id):
        try:
            conn = self.obtener_conexion()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM gastos_operativos WHERE id = ?", (gasto_id,))
            conn.commit()
            conn.close()
            return {"success": True}
        except Exception as e:
            return {"success": False, "error": str(e)}

  def obtener_balance_financiero(self, fecha_desde, fecha_hasta):
        try:
            conn = self.obtener_conexion()
            cursor = conn.cursor()

            f_inicio = f"{fecha_desde} 00:00:00"
            f_fin = f"{fecha_hasta} 23:59:59"

            cursor.execute("SELECT SUM(total) FROM ventas WHERE fecha_hora BETWEEN ? AND ?", (f_inicio, f_fin))
            res_v = cursor.fetchone()[0]
            ventas_total = float(res_v) if res_v else 0.0

            cursor.execute("SELECT SUM(monto) FROM gastos_operativos WHERE fecha_hora BETWEEN ? AND ?", (f_inicio, f_fin))
            res_g = cursor.fetchone()[0]
            opex_total = float(res_g) if res_g else 0.0

            cursor.execute("SELECT id, categoria, descripcion, monto, fecha_hora FROM gastos_operativos WHERE fecha_hora BETWEEN ? AND ? ORDER BY id DESC", (f_inicio, f_fin))
            filas_gastos = cursor.fetchall()
            
            gastos_lista = [{
                "id": g[0],
                "categoria": g[1],
                "descripcion": g[2],
                "monto": g[3],
                "fecha_hora": g[4]
            } for g in filas_gastos]

            cursor.execute("""
                SELECT SUM(p.precio_compra * vd.cantidad)
                FROM ventas_detalle vd
                JOIN ventas v ON vd.venta_id = v.id
                JOIN productos p ON vd.producto_codigo = p.codigo
                WHERE v.fecha_hora BETWEEN ? AND ?
            """, (f_inicio, f_fin))
            res_c = cursor.fetchone()[0]
            costo_mercancia = float(res_c) if res_c else 0.0

            margen_contribucion_bruto = ventas_total - costo_mercancia
            porcentaje_margen = (margen_contribucion_bruto / ventas_total) if ventas_total > 0 else 0.0

            punto_equilibrio = (opex_total / porcentaje_margen) if porcentaje_margen > 0 else 0.0
            utilidad_neta = margen_contribucion_bruto - opex_total

            conn.close()

            return {
                "success": True,
                "ventasTotal": round(ventas_total, 2),
                "opexTotal": round(opex_total, 2),
                "puntoEquilibrio": round(punto_equilibrio, 2),
                "utilidadNeta": round(utilidad_neta, 2),
                "gastos": gastos_lista
            }
        except Exception as e:
            return {"success": False, "error": str(e)}
            

if __name__ == "__main__":
  init_db()
  api = API()

  window = webview.create_window(
      "Inventory Full",
      resource_path("web/index.html"),
      js_api=api,
      width=1280,
      height=768,
      min_size=(1024, 600),
  )
  webview.start(debug=False)