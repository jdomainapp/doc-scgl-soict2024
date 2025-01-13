@ModuleDesc(  
    name="ModuleStudent", 
    modelDesc = @ModelDesc(
        model = Student.class
    ),
    viewDesc = @ViewDesc(
        formTitle = "Form: Student",
        domainClassLabel = "Student",
        imageIcon = "Student.png",
        view = View.class,
        viewType = RegionType.Null,
        parent = RegionName.Null,
    ), 
    controllerDesc = @ControllerDesc(
        controller = ControllerBasic.class,
        openPolicy = OpenPolicy.l,
        isDataFieldStateListener = false
    ),
    setUpDesc = @SetUpDesc(),
    type = ModuleType.DomainData,
    isPrimary = false
)
public class ModuleStudent { 
    // view configuration 
    @AttributeDesc(label = "Student class") 
    private String title; 
    @AttributeDesc(label = "Id", type=JTextField.class) 
    private int id; 
    @AttributeDesc(label = "Name", type=JTextField.class) 
    private String name; 
    @AttributeDesc(label = "Gender", 
    type=JComboField.class) 
    private Gender gender; 
    @AttributeDesc(label = "Dob") 
    private Date dob; 
    @AttributeDesc(label = "Address", type=JDataPanel.class) 
    private Address address; 
    @AttributeDesc(label = "Enrolments") 
    private Collection <Enrolment> enrols; 
}