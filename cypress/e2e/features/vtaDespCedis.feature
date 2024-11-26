# Created by drodriguez at 21/11/24
Feature: Venta con Despacho desde CEDIS

  Background:
    Given Entramos al WMS

  Scenario: Crear Pre-Orden
    When Entramos en la Gestion de Ventas con Despacho desde CEDIS
    Then Entramos en Crear Solicitud
    And  Seleccionamos "Chitre"
    And  le damos click en "Buscar_Materiales"
    And  Ingresamos el código EAN
      | ean           |
      | 7453065196370 |
    And  le damos click en "la_Lupa"
    And  le damos click en "el_Gancho_verde"
    And  le damos click en "el_carrito"
    And  le damos click en "Almacen"
    And  le damos click en "CEDIS"
    And Se ingresa la Cantidad
      | cantidad |
      | 1        |
    And  le damos click en "Guardar"
    And  Seleccionamos el Delivery
      | delivery    |
      | DELIVERY 10 |
    And  le damos click en "Imprimir_Proforma"
    And  Se realiza el Registro del Cliente
      | cedula   | nombre | telefono |
      | 8-99-887 | test 1 | 66998877 |
    And  le damos click en "guardar"
    Then Volvemos al inicio

  Scenario: Confirmar Pre-Orden
    When Entramos en la Gestion de Ventas con Despacho desde CEDIS
    Then Entramos en Crear Solicitud
    And  Seleccionamos Chitre
    And  Ingresamos la Cédula del cliente
    And  le damos click en Cargar
    Then le damos click en Finalizar para confirmar la Orden
    And  Escaneamos la Factura
    And  Completamos el formulario para el envío a Domicilio
    And  le damos click en Guardar
    Then le damos click en Continuar


