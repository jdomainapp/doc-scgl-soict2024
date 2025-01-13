@SystemDesc(
    appName="Courseman",
    splashScreenLogo = "coursemanapplogo.jpg",
    language = Language.English,
    dsDesc = @DSDesc(
        type="postgresql",
        dsUrl = "http://dataserver:5432/domainds",
        ser = "postgres", password = "postgres",
        dsmType = DSM.class, 
        domType = DOM.class,
        osmType = PostgreSQLOSM.class,
        connType = ConnectionType.Client),
    orgDesc = @OrgDesc(
        name = "Faculty of IT",
        address = "Hanoi, Vietnam", logo = "deptit.png",
        url = "https://swinburne-vn.edu.vn"),
    securityDesc = @SecurityDesc(isEnabled = false),
    setUpDesc = @SysSetUpDesc(
        setUpConfigType = SetUpConfig.class),
    modules = { 
        ModuleMain.class, ModuleCourseModule.class, 
        ModuleEnrolment.class,
        ModuleStudent.class,
        ModuleAdress.class, 
        ModuleStudentClass.class
    },
    sysModules = {}
)
public class SCCCourseMan { }