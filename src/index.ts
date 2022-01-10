//  type ServiceConfigParams = "port" | "basePath" | "enableStripPayment";

//  const serviceConfig: Record<ServiceConfigParams, string | number | boolean> = {
//  port: 3000,
//  basePath: "http://localhost",
//  enableStripPayment: true,
//  };

//  enum PRIORITY {
//  DEFAULT,
//  LOW,
//  HIGH,
//  }

//  interface TodoItemProps {
//  title: string;
//  description: string;
//  priority: PRIORITY;
//  }

//  class TodoItem {
//  description?: string;
//  title = "Default item title";
//  priority = PRIORITY.DEFAULT;

//  constructor(todoItemProps: Partial<TodoItemProps>) {
//  Object.assign(this, todoItemProps);
//  }
//  }

//  const item = new TodoItem({
//  description: "Some description",
//  title: "New Title",
//  priority: PRIORITY.LOW,
//  });

//  interface SpaceShipProps {
//  velocity?: number;
//  location?: string;
//  start: () => void;
//  stop: () => void;
//  }

//  // Fully functional spaceship
//  const spaceShipOne: Required<SpaceShipProps> = {
//  velocity: 110000,
//  location: "mars",
//  start: () => null,
//  stop: () => null,
//  };

//  // Spaceship under construction
//  const spaceShipTwo: Partial<SpaceShipProps> = {};

//  // Spaceship with few specific cherry-picked properties
//  const spaceShipThree: Pick<SpaceShipProps, "start" | "stop"> = {
//  start: () => {
//  console.log("starting spaceship...");
//  },
//  stop: () => {
//  console.log("stoping spaceship");
//  },
//  };

//  const spaceShipFour: Omit<SpaceShipProps, "velocity"> = {
//  start: () => null,
//  stop: () => null,
//  location: "Jupiter",
//  };

//  interface SignupFormState {
//  email: string;
//  name: string;
//  }

//  interface ActionPayload {
//  key: keyof SignupFormState;
//  value: string;
//  }

//  let newActionPayload: ActionPayload = {
//  key: "name",
//  value: "Siddharth",
//  };

//  type actionPayloadKeys = keyof typeof newActionPayload;

//  let formData: Record<actionPayloadKeys, string> = {
//  key: "email",
//  value: "dev.designer.sid@gmail.com",
//  };

//  type NominalTyped<Type, Brand> = Type & { __type: Brand };

//  class User {
//  private static readonly __type: unique symbol = Symbol();
//  name: string;
//  constructor(name: string) {
//  this.name = name;
//  }
//  }
//  type Account = {
//  name: string;
//  };
//  function printAccountName(o: User) {
//  console.log(o.name);
//  }
//  printAccountName(new User("Theo"));
//  printAccountName({ name: "Alex" }); // Fail to typecheck

/* Abstraction in TypeScript */

interface RestApiClient<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
}

interface Site {
  name: string;
}

class SitesApiClient implements RestApiClient<Site> {
  getAll() {
    const res: Site[] = [{ name: "websiteOne" }, { name: "websiteTwo" }];
    return Promise.resolve(res);
  }
  getOne(id: string) {
    return Promise.resolve({ name: "websiteOne" });
  }
}

/* Inheritance in TypeScript */

class EventAction {
  trigger(delay: number = 0) {
    console.log(`Event triggered in ${delay}s.`);
  }
}

class NotificationEvent extends EventAction {
  sendMail() {
    console.log("Sending email ...");
  }
}

const ev = new NotificationEvent();
ev.trigger();
ev.sendMail();
ev.trigger(10);

class A {
  constructor() {
    this.subClassCheck();
  }
  private subClassCheck(): never | void {
    if (Object.getPrototypeOf(this) !== A.prototype) {
      throw new Error("Cannot extend this class.");
    }
  }
}

class B extends A {}

let a = new A();
let b = new B();
