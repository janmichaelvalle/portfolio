# LaunchPadX ERD

```mermaid
erDiagram
    direction TB
    PRODUCT_IDEA {
        int id PK  
        varchar product_name  
        varchar product_idea_task  
    }

    SOURCING_ASANA_TASK {
        int id PK  
        int product_idea_id FK  
    }

    SHAREPOINT_FOLDER {
        int id PK  
        int product_idea_id FK  
    }

    PRE_CLASSIFICATION {
        int id PK  
        int product_idea_id FK  
        varchar status 
        varchar dg_cosmetic
        varchar dg_aircraft  
    }

    TRADE_COMPLIANCE_PROFILE {
      int id PK
      int product_idea_id FK
      varchar status
    }

      TRADE_COMPLIANCE_ENTRY {
      int id PK
      int compliance_profile_id FK
      varchar country
      varchar hs_code
      varchar declaration
    }

    ECDL_PROFILE {
      int id PK
      int product_idea_id FK
      varchar status          
    
    }

    ECDL_REQUIREMENT {
        int id PK  
        int ecdl_profile_id FK  
        varchar status
        varchar country
        varchar topic  
        varchar legal  
        text notes  
    }

    ECDL_EXPECTED_DOC {
        int id PK  
        int ecdl_requirement_id FK  
        int expected_standard  
        text apply_to  
        text requested_doc  
    }

    ECDL_ACCEPTANCE_VERSION {
        int id PK
        int ecdl_requirement_id FK
        int version_number       
        varchar accepted_standard
        varchar validity_status   
        datetime date_of_report
        text notes
        datetime created_at
    }

    ECDL_ACCEPTANCE_ATTACHMENT {
        int id PK
        int acceptance_version_id FK
        int doc_id
    }



     QUOTATION_FILE {
        int id PK
        int product_idea_id FK
        int doc_id

    }

    
    ITEM {
        int id PK
        int quotation_file_id FK
        varchar status
        varchar sellerx_sku
        varchar upc
        varchar netsuite_id
    }

   

 

    PRODUCT_IDEA ||--|| SOURCING_ASANA_TASK       : "1 to 1"
    PRODUCT_IDEA ||--|| SHAREPOINT_FOLDER         : "1 to 1"
    PRODUCT_IDEA ||--|| PRE_CLASSIFICATION        : "1 to 1"
    PRODUCT_IDEA ||--|| QUOTATION_FILE         : "1 to 1"
    PRODUCT_IDEA ||--|| ECDL_PROFILE : "1 to 1"
    PRODUCT_IDEA ||--|| TRADE_COMPLIANCE_PROFILE : "1 to 1"
    TRADE_COMPLIANCE_PROFILE ||--o{ TRADE_COMPLIANCE_ENTRY : "1 to many"

    ECDL_PROFILE ||--o{ ECDL_REQUIREMENT          : "1 to many"
    ECDL_REQUIREMENT ||--|| ECDL_EXPECTED_DOC     : "1 to 1"
    ECDL_REQUIREMENT ||--o{ ECDL_ACCEPTANCE_VERSION : "1 to many"
    ECDL_ACCEPTANCE_VERSION ||--o{ ECDL_ACCEPTANCE_ATTACHMENT : "1 to many"

    QUOTATION_FILE ||--o{ ITEM         : "1 to many"

     



