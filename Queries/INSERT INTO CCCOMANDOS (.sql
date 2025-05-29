/* Crear nuevo comando para Agentes */
INSERT INTO CCCOMANDOS (
    FECHAREGISTRO,
    NOMBRE,
    DESCRIPCION,
    ESACTIVO
) VALUES (
    TO_DATE('28-MAY-25', 'DD-MON-YY'),
    'ELEGIR TIPO PERSONA',
    'Elige el tipo de Persona por default con la cual se va a cotizar en el paso de Datos Asegurado',
    1
);

/* Modificar ID. */
UPDATE CCCOMANDOS
SET
    ID = 9
WHERE
    NOMBRE = 'ELEGIR TIPO PERSONA';

/* Modificar nombre */
UPDATE CCCOMANDOS
SET
    NOMBRE = 'REEMPLAZAR CON'
WHERE
    ID = 5;

/* Modificar nombre comando 9 */    
UPDATE CCCOMANDOS
SET
    NOMBRE = 'ELEGIR TIPO PERSONA'
WHERE
    ID = 9;

/* Filtrar PLANTILLA por TIPOCALENDARIO, FIJA Y SUBRAMO AUTOS */
SELECT
    *
FROM
    PLANTILLA
WHERE
    TIPOCALENDARIO = 'FIJA'
    AND
WHERE
    SUBRAMO = 'AUTOS';  