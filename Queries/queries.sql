UPDATE COTIZACION SET ESTATUSFIRMA = 'Approved' WHERE FOLIO = 'sz0tqssbbywztdx70harzabjpeh2tahv';


SELECT
    /* ID,
    FECHAREGISTRO, */
    NOMBRE,
   /*  DESCRIPCION,
    ESACTIVO, */
    RUTA
FROM
    CCCONSTANTES
WHERE
    NOMBRE = 'uso';



/* Tomando la data de dos tablas. */
SELECT
    P.NOMBREINSTANCIA,
    CM.*
FROM
    CONFIGURACIONMULTIAGENTES CM
JOIN
    PLANTILLA P ON CM.PLANTILLA_ID = P.ID
WHERE
    CM.PLANTILLA_ID = 2;

/* Borrar todos los registros de la instancia de ANUALIZADA */
DELETE FROM CONFIGURACIONMULTIAGENTES 
WHERE PLANTILLA_ID = 2;

SELECT
    *
FROM CCTIPOCOTIZADOR
    
SELECT * FROM CCNOMBRESCATALOGO


INSERT INTO CCNOMBRESCATALOGO (NOMBRE, NOMBRECOMPONENTE, ESACTIVO)
VALUES ('REGIMEN FISCAL', 'c-select-regimen-fiscal', 1);
