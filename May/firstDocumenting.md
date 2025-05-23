- [ ]  **SOLICITUD**
    
    Proceso de validación de una cotización para pasar a una póliza, donde la solicitud consiste en la aprobación previa sobre la información que se contempla del `Moviemiento()`, que manejamos de manera general.
    
    Tenemos consideraciones a contemplar que se mandan y evalúan por `SISE`, dentro del XML tenemos que mandar
    
    - [ ]  Asegurado (Con la información complementaría del titular, según el formulario FRMASEGURADO).
    - [ ]  Contratante
        
        Información de la entidad o persona que pagará esta Póliza
        
        - PF: Puede ser el mismo Titular u otro Contratante.
        - PM: Entidad quien asegurara a la persona(s).
    - [ ]  Beneficiarios: Lista de Persona que deben ser mayor de edad, (máximo 3), en los cuales son correspondientes por cada asegurado(s).
        
        Inclusión dentro de cada Asegurado como `beneficiariosList`
        
    - [ ]  Documentos: Carga de documentos de identificación del Contratante que se procesan previamente a cada solicitud, con estos se recuperan los datos del Contratante.
        
        Son agnósticos al `Movimiento()`
        
    - [ ]  Cuestionario 492:
        
        Artículo 492, contempla que existe una consideración distinta por si el asegurado o contratante comparten relación con un funcionario público, por ende se manda este cuestionario492.
        
        El cuestionario 492 posé algunas consideraciones
        
        - Sí Contratante ≠ Titular : Mandar cada quien su cuestionario en cada objecto, tanto `contratante()` como `asegurado[0]`, el cual se comparte así: `cuestionario492List[]`.
        - Sí Contratante = Titular: Mandar el mismo `cuestionario492List[]`.
        - Sí Contratante ≠ noRealcion funcionarioPublico: `cuestionario492List[]`, vació.
        - Sí Titular≠ noRealcion funcionarioPublico: `cuestionario492List[]`, vació.
        - Sí Titular | | Contratante = relacioon funcionarioPublcio mandar lleno el `cuestionario492List[].`
        
        Esto se comporta de la siguiente forma en el XML
        
        ![Caso cuando no hay relación con un funcionario público, al menos la primer pregunta se debe mandar en  respuesta negativa.](attachment:f52c7724-fb44-4458-8bf1-ad5ace3d4b5d:unnamed.png)
        
        Caso cuando no hay relación con un funcionario público, al menos la primer pregunta se debe mandar en  respuesta negativa.