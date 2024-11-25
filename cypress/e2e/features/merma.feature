# Created by drodriguez at 11/01/24
Feature: Módulo de Merma

  Background:
    Given Entramos al WMS

  Scenario: Creación de MERMA en PISO
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "La_Doña"
    And  Seleccionamos area
      | area               |
      | PISO DE VENTA M010 |
    And Escaneamos el Material
      | material     |
      | 630509949922 |
    And Ingresamos la Cantidad
      | cantidad |
      | 1        |
    And Le doy click en Agregar material
    And Le doy click en Guardar
    And Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de MERMA en PISO error de material T2G
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "La_Doña"
    And  Seleccionamos area
      | area               |
      | PISO DE VENTA M010 |
    And  Escaneamos el Material
      | material      |
      | 7453064734672 |
    Then Mensaje de error mostrado " Este material no tiene existencia en el piso de venta. "
    And  Escaneamos el Material
      | cantidad |
      | 1        |
    And  Le doy click en Agregar material
    And  Le doy click en Guardar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test  |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de MERMA en TECH2GO
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "La_Doña"
    And  Seleccionamos area
      | area         |
      | TECH2GO M010 |
    And  Escaneamos el Material
      | material     |
      | 083832847210 |
    And  Ingresamos la Cantidad
      | cantidad |
      | 1        |
    And  Le doy click en Agregar material
    And  Le doy click en Guardar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de MERMA en Bodega
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "La_Doña"
    And  Seleccionamos area
      | area        |
      | BODEGA M010 |
    And  Escaneamos el bulto
      | bulto          |
      | ZZ000000000001 |
    And  Escaneamos el Material
      | material      |
      | 2150108216730 |
    And  Ingresamos la Cantidad
      | cantidad |
      | 1        |
    And  Le doy click en Agregar material
    And  Le doy click en Guardar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de MERMA en PISO - Varios materiales
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "Chitre"
    And  Seleccionamos area
      | area               |
      | PISO DE VENTA M011 |
    And Se escanea el Material
      | material      | cantidad |
      | 2150108059535 | 2        |
      | 2150108285439 | 1        |
      | 2150108285507 | 3        |
      | 6900004193958 | 1        |
      | 2150108285491 | 2        |
      | 7702433312189 | 2        |
      | 2150108285460 | 3        |
      | 2150108285897 | 1        |
      | 2150108285361 | 1        |
      | 2150108285408 | 1        |
      | 2150108285477 | 1        |
      | 2150108285446 | 2        |
      | 6900004195945 | 3        |
      | 2150108285323 | 3        |
      | 2150108285330 | 3        |
    And  Le doy click en Guardar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de MERMA en Bultos Compuestos
    When Entramos en Colector
    Then Entramos en Crear Merma
    And  Seleccionamos "Metromall"
    And  Seleccionamos area
      | area        |
      | BODEGA M005 |
    And  Escaneamos el bulto
      | bulto          |
      | CC000002727759 |
    And  Se escanea el Material
      | material      | cantidad |
      | 7453064708109 | 1        |
    And  Escaneamos el bulto
      | bulto          |
      | CC000002727774 |
    And  Le doy click en Guardar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Rechazar Merma
    When Entramos en Gestión de Auditoría
    Then Entramos en Listado de Merma
    And  Seleccionamos "La_Doña"
    And  Se filtra por Estatus
      | estatus |
      | Abierto |
    And  Entramos en el detalle de la Merma
    And  Le doy click en Seleccionar materiales
    And  Le doy click en Rechazar
    Then Volvemos al inicio

  Scenario: Aprobar Merma
    When Entramos en Gestión de Auditoría
    Then Entramos en Listado de Merma
    And  Seleccionamos "La_Doña"
    And  Se filtra por Estatus
      | estatus |
      | Abierto |
    And  Entramos en el detalle de la Merma
    And  Le doy click en Seleccionar materiales
    And  Le doy click en Aprobar
    And  Seleccionamos impresora
      | impresora  |
      | Epson Test |
    And  Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Anular Merma
    When Entramos en Gestión de Auditoría
    Then Entramos en Listado de Merma
    And  Seleccionamos "La_Doña"
    And  Se filtra por Estatus
      | estatus      |
      | Sincronizado |
    And  Entramos en el detalle de la Merma
    And  Le doy click en Anular Merma
    Then Volvemos al inicio

