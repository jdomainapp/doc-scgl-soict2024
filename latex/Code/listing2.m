@ModuleDesc(  
    name="Module: Student", 
    model="Student", 
    view=View.class , 
    containmentTree = @CTree { 
        root = "Student " , 
        edges = { 
            @CEdge (p=Student.class, c=Address.class ), 
            @CEdge (p=Student.class, c= Enrolment.class ) 
        }
    } 
)  
class ModuleStudent { 
    // view configuration 
    @AttributeDesc(label="Form: Student") 
    private String title; 
    @AttributeDesc(label="Id", type=JTextField.class) 
    private int id; 
    @AttributeDesc(label="Name", type=JTextField.class) 
    private String name; 
    @AttributeDesc(label="Gender", 
    type=JComboField.class) 
    private Gender gender; 
    @AttributeDesc(label="Dob") 
    private Date dob; 
    @AttributeDesc(label="Address", type=JDataPanel.class) 
    private Address address; 
    @AttributeDesc(label="Form: Enrolment") 
    private Collection <Enrolment > enrols; 
}