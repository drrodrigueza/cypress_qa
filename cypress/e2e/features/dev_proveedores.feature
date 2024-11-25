# Created by drodriguez at 11/12/24
Feature: Devolución a Proveedores Nacionales
  - Piso de Ventas
  - Tech2Go
  - Bodega
  - Anular Devolución
  - Aduana Devolución

  Background:
    Given Entramos al WMS

  Scenario: Creación de Devolución en PISO
    When Entramos en Colector
    Then Entramos en Devolución a Proveedor
    And Seleccionamos "Calidonia"
    Then Seleccionamos area
      | area               |
      | PISO DE VENTA M004 |
    And Escaneamos el Material
      | material     |
      | 630509963706 |
    And Ingresamos la Cantidad
      | cantidad |
      | 1        |
    And Le doy click en Agregar material
    And Le doy click en Guardar
    And Le doy click en Finalizar
    And Seleccionamos impresora
      | impresora       |
      | RicohBodegaM004 |
    And Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de Devolución en Tech2Go
    When Entramos en Colector
    Then Entramos en Devolución a Proveedor
    And Seleccionamos "Calidonia"
    Then Seleccionamos area
      | area         |
      | TECH2GO M004 |
    Then Escaneamos el Material
      | material      |
      | 2100000961986 |
    Then Ingresamos la Cantidad
      | cantidad |
      | 1        |
    Then Le doy click en Agregar material
    Then Le doy click en Guardar
    Then Le doy click en Finalizar
    Then Seleccionamos impresora
    |impresora|
    |RicohBodegaM004|
    Then Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Creación de Devolución en Bodega
    When Entramos en Colector
    Then Entramos en Devolución a Proveedor
    And  Seleccionamos "Calidonia"
    Then Seleccionamos area
      | area        |
      | BODEGA M004 |
    And Escaneamos el bulto
      | bulto          |
      | ZZ000000012451 |
    Then Escaneamos el Material
      | material      |
      | 4893825028542 |
    Then Ingresamos la Cantidad
      | cantidad |
      | 1        |
    Then Le doy click en Agregar material
    Then Le doy click en Guardar
    Then Le doy click en Finalizar
    Then Seleccionamos impresora
      | impresora       |
      | RicohBodegaM004 |
    Then Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Anulación de Devolución
    When Entramos en Gestión de Inventario
    Then Entramos en Listado Devolución a Proveedores
    And  Seleccionamos "Calidonia"
    And  Filtramos por Estatus
      | estatus               |
      | Pendiente por retirar |
    And  Entramos al detalle de la Devolución
    And le doy click en Anular Devolución
    Then le doy click en Anular
    Then Volvemos al inicio

  Scenario: Aduana Devolución - Salida de Mercancía
    When Buscamos el bulto Devolución
    Then Entramos en Colector
    And  Entramos en Aduana Devolución a Proveedor
    And  Seleccionamos "Calidonia"
    And  Escaneamos el bulto Devolución
    And  Le doy click en Guardar
    Then Seleccionamos impresora
      | impresora       |
      | RicohBodegaM004 |
    Then Le doy click en Aceptar
    Then Volvemos al inicio

  Scenario: Devolución a Proveedores varios materiales
    When Entramos en Colector
    Then Entramos en Devolución a Proveedor
    And Seleccionamos "Calidonia"
    Then Seleccionamos area
      | area               |
      | PISO DE VENTA M004 |
    And Se escanea el Material
      | material      | cantidad |
      | 5010993785742 | 1        |
      | 630509963706  | 2        |
    And Le doy click en Guardar
    And Se escanea el Material
      | material      | cantidad |
      | 630509989836  | 1        |
      | 5010993652556 | 2        |
    And Le doy click en Guardar
    And Le doy click en Finalizar
    And Seleccionamos impresora
      | impresora       |
      | RicohBodegaM004 |
    And Le doy click en Aceptar
    Then Volvemos al inicio

