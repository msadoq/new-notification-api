export const AUTH_CHECK: string;
export const AUTH_ERROR: string;
export const AUTH_GET_PERMISSIONS: string;
export const AUTH_LOGIN: string;
export const AUTH_LOGOUT: string;
export class Admin {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Admin {
    namespace childContextTypes {
        function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace authProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace defaultProps {
        class appLayout {
            static defaultProps: {
                theme: any;
            };
            static propTypes: {
                theme: any;
            };
            constructor(props: any);
            componentWillReceiveProps(nextProps: any): void;
            forceUpdate(callback: any): void;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
        class catchAll {
            static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
            6fc570d6bd61383819d0f9e7407c452d: any;
            b768b78919504fba9de2c03545c5cd3a: any;
            d4bd0baacbc52bbd48bbb9eb24344ecd: any;
            muiThemeProviderOptions: any;
        };
            static displayName: string;
            static options: { };
            static propTypes: {
            classes: any;
            innerRef: any;
        };
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace catchAll {
        class Naked {
            // Too-deep object hierarchy from index.Admin.defaultProps.catchAll.Naked
            static defaultProps: any;
            // Too-deep object hierarchy from index.Admin.defaultProps.catchAll.Naked
            static displayName: any;
            constructor(...args: any[]);
        }
    }
    class loading {
        static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
        6fc570d6bd61383819d0f9e7407c452d: any;
        b768b78919504fba9de2c03545c5cd3a: any;
        d4bd0baacbc52bbd48bbb9eb24344ecd: any;
        muiThemeProviderOptions: any;
    };
            static displayName: string;
            static options: { };
            static propTypes: {
        classes: any;
        innerRef: any;
    };
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
namespace loading {
    class Naked {
        // Too-deep object hierarchy from index.Admin.defaultProps.loading.Naked
        static defaultProps: any;
        // Too-deep object hierarchy from index.Admin.defaultProps.loading.Naked
        static displayName: any;
        constructor(...args: any[]);
    }
}
class loginPage {
    static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
    6fc570d6bd61383819d0f9e7407c452d: any;
    b768b78919504fba9de2c03545c5cd3a: any;
    d4bd0baacbc52bbd48bbb9eb24344ecd: any;
    muiThemeProviderOptions: any;
};
            static displayName: string;
            static options: { };
            static propTypes: {
    classes: any;
    innerRef: any;
};
constructor(props: any, context: any);
attach(theme: any): void;
componentDidMount(): void;
componentDidUpdate(): void;
componentWillUnmount(): void;
detach(theme: any): void;
forceUpdate(callback: any): void;
getClasses(): any;
render(): any;
setState(partialState: any, callback: any): void;
        }
namespace loginPage {
    class Naked {
        // Too-deep object hierarchy from index.Admin.defaultProps.loginPage.Naked
        static defaultProps: any;
        // Too-deep object hierarchy from index.Admin.defaultProps.loginPage.Naked
        static propTypes: any;
        constructor(props: any);
    }
}
class logoutButton {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
    }
}
export function AdminRouter(ownerProps: any, context: any): any;
export namespace AdminRouter {
    namespace contextTypes {
        function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace authProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace defaultProps {
        class loading {
            static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
            6fc570d6bd61383819d0f9e7407c452d: any;
            b768b78919504fba9de2c03545c5cd3a: any;
            d4bd0baacbc52bbd48bbb9eb24344ecd: any;
            muiThemeProviderOptions: any;
        };
            static displayName: string;
            static options: { };
            static propTypes: {
            classes: any;
            innerRef: any;
        };
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace loading {
        class Naked {
            // Too-deep object hierarchy from index.AdminRouter.defaultProps.loading.Naked
            static defaultProps: any;
            // Too-deep object hierarchy from index.AdminRouter.defaultProps.loading.Naked
            static displayName: any;
            constructor(...args: any[]);
        }
    }
}
const displayName: string;
}
export class AppBar {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace AppBar {
    class Naked {
        static contextTypes: {};
        static displayName: string;
        constructor(props: any, context: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        class Naked {
            static displayName: string;
            static propTypes: {
                initialWidth: any;
                theme: any;
                width: any;
            };
            constructor(props: any);
            componentDidMount(): void;
            componentWillUnmount(): void;
            forceUpdate(callback: any): void;
            getWidth(...args: any[]): any;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
    }
    class WrappedComponent {
        static displayName: string;
        static options: {};
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        class Naked {
            static contextTypes: {};
            static displayName: string;
            constructor(props: any, context: any);
            componentDidMount(): void;
            componentWillUnmount(): void;
            forceUpdate(callback: any): void;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
        namespace Naked {
            class Naked {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.Naked.Naked
                static displayName: any;
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.Naked.Naked
                static propTypes: any;
                constructor(props: any);
            }
        }
        namespace contextTypes {
            function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace b768b78919504fba9de2c03545c5cd3a {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.contextTypes.b768b78919504fba9de2c03545c5cd3a
                const isRequired: any;
            }
            function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.contextTypes.d4bd0baacbc52bbd48bbb9eb24344ecd
                const isRequired: any;
            }
            function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace muiThemeProviderOptions {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.contextTypes.muiThemeProviderOptions
                const isRequired: any;
            }
        }
        namespace propTypes {
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace innerRef {
                // Too-deep object hierarchy from index.AppBar.WrappedComponent.propTypes.innerRef
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class AppBarMobile {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace AppBarMobile {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.AppBarMobile.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.AppBarMobile.Naked.propTypes.classes
                const isRequired: any;
            }
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function toggleSidebar(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    class WrappedComponent {
        static displayName: string;
        static options: {};
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        function Naked(_a: any): any;
        namespace Naked {
            const propTypes: {
                className: any;
                classes: any;
                title: any;
                toggleSidebar: any;
            };
        }
        namespace contextTypes {
            function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace b768b78919504fba9de2c03545c5cd3a {
                // Too-deep object hierarchy from index.AppBarMobile.WrappedComponent.contextTypes.b768b78919504fba9de2c03545c5cd3a
                const isRequired: any;
            }
            function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
                // Too-deep object hierarchy from index.AppBarMobile.WrappedComponent.contextTypes.d4bd0baacbc52bbd48bbb9eb24344ecd
                const isRequired: any;
            }
            function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace muiThemeProviderOptions {
                // Too-deep object hierarchy from index.AppBarMobile.WrappedComponent.contextTypes.muiThemeProviderOptions
                const isRequired: any;
            }
        }
        namespace propTypes {
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.AppBarMobile.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace innerRef {
                // Too-deep object hierarchy from index.AppBarMobile.WrappedComponent.propTypes.innerRef
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ArrayField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class ArrayInput {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ArrayInput {
    class WrappedComponent {
        constructor(...args: any[]);
        componentDidMount(): void;
        componentDidUpdate(prevProps: any): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function decoratedComponent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace decoratedComponent {
                // Too-deep object hierarchy from index.ArrayInput.WrappedComponent.propTypes.decoratedComponent
                const isRequired: any;
            }
            function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace defaultValue {
                // Too-deep object hierarchy from index.ArrayInput.WrappedComponent.propTypes.defaultValue
                const isRequired: any;
            }
            function initializeForm(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function input(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace input {
                // Too-deep object hierarchy from index.ArrayInput.WrappedComponent.propTypes.input
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace source {
                // Too-deep object hierarchy from index.ArrayInput.WrappedComponent.propTypes.source
                const isRequired: any;
            }
            function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace validate {
                // Too-deep object hierarchy from index.ArrayInput.WrappedComponent.propTypes.validate
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Authenticated {
    static WrappedComponent(...args: any[]): any;
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace Authenticated {
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function AutocompleteArrayInput(props: any): any;
export function AutocompleteInput(props: any): any;
export const BEFORE_LOCATION_CHANGE: string;
export class BooleanField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function BooleanInput(props: any): any;
export class BulkActions {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace BulkActions {
    class Naked {
        static defaultProps: {
            children: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            label: string;
            selectedIds: any[];
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class BulkActionsToolbar {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class BulkDeleteAction {
    static defaultProps: {
        label: string;
        undoable: boolean;
    };
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace BulkDeleteAction {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class BulkDeleteButton {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace BulkDeleteButton {
    class Naked {
        static defaultProps: {
            icon: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            label: string;
            undoable: boolean;
        };
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.basePath
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.classes
                const isRequired: any;
            }
            function dispatchCrudDeleteMany(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace icon {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.icon
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.label
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function selectedIds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function startUndoable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace startUndoable {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.startUndoable
                const isRequired: any;
            }
            function undoable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace undoable {
                // Too-deep object hierarchy from index.BulkDeleteButton.Naked.propTypes.undoable
                const isRequired: any;
            }
        }
    }
    class WrappedComponent {
        static displayName: string;
        static options: {};
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        class Naked {
            static defaultProps: {
                icon: any;
                label: any;
                undoable: any;
            };
            static propTypes: {
                basePath: any;
                classes: any;
                dispatchCrudDeleteMany: any;
                icon: any;
                label: any;
                resource: any;
                selectedIds: any;
                startUndoable: any;
                undoable: any;
            };
            constructor(...args: any[]);
            forceUpdate(callback: any): void;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
        namespace contextTypes {
            function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace b768b78919504fba9de2c03545c5cd3a {
                // Too-deep object hierarchy from index.BulkDeleteButton.WrappedComponent.contextTypes.b768b78919504fba9de2c03545c5cd3a
                const isRequired: any;
            }
            function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
                // Too-deep object hierarchy from index.BulkDeleteButton.WrappedComponent.contextTypes.d4bd0baacbc52bbd48bbb9eb24344ecd
                const isRequired: any;
            }
            function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace muiThemeProviderOptions {
                // Too-deep object hierarchy from index.BulkDeleteButton.WrappedComponent.contextTypes.muiThemeProviderOptions
                const isRequired: any;
            }
        }
        namespace propTypes {
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.BulkDeleteButton.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace innerRef {
                // Too-deep object hierarchy from index.BulkDeleteButton.WrappedComponent.propTypes.innerRef
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Button {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Button {
    class Naked {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const CHANGE_LOCALE: string;
export const CHANGE_LOCALE_FAILURE: string;
export const CHANGE_LOCALE_SUCCESS: string;
export const COMPLETE: string;
export const CREATE: string;
export const CRUD_CHANGE_LIST_PARAMS: string;
export const CRUD_CREATE: string;
export const CRUD_CREATE_FAILURE: string;
export const CRUD_CREATE_LOADING: string;
export const CRUD_CREATE_SUCCESS: string;
export const CRUD_DELETE: string;
export const CRUD_DELETE_FAILURE: string;
export const CRUD_DELETE_LOADING: string;
export const CRUD_DELETE_MANY: string;
export const CRUD_DELETE_MANY_FAILURE: string;
export const CRUD_DELETE_MANY_LOADING: string;
export const CRUD_DELETE_MANY_OPTIMISTIC: string;
export const CRUD_DELETE_MANY_SUCCESS: string;
export const CRUD_DELETE_OPTIMISTIC: string;
export const CRUD_DELETE_SUCCESS: string;
export const CRUD_GET_ALL: string;
export const CRUD_GET_ALL_FAILURE: string;
export const CRUD_GET_ALL_LOADING: string;
export const CRUD_GET_ALL_SUCCESS: string;
export const CRUD_GET_LIST: string;
export const CRUD_GET_LIST_FAILURE: string;
export const CRUD_GET_LIST_LOADING: string;
export const CRUD_GET_LIST_SUCCESS: string;
export const CRUD_GET_MANY: string;
export const CRUD_GET_MANY_ACCUMULATE: string;
export const CRUD_GET_MANY_FAILURE: string;
export const CRUD_GET_MANY_LOADING: string;
export const CRUD_GET_MANY_REFERENCE: string;
export const CRUD_GET_MANY_REFERENCE_FAILURE: string;
export const CRUD_GET_MANY_REFERENCE_LOADING: string;
export const CRUD_GET_MANY_REFERENCE_SUCCESS: string;
export const CRUD_GET_MANY_SUCCESS: string;
export const CRUD_GET_MATCHING: string;
export const CRUD_GET_MATCHING_ACCUMULATE: string;
export const CRUD_GET_MATCHING_FAILURE: string;
export const CRUD_GET_MATCHING_LOADING: string;
export const CRUD_GET_MATCHING_SUCCESS: string;
export const CRUD_GET_ONE: string;
export const CRUD_GET_ONE_FAILURE: string;
export const CRUD_GET_ONE_LOADING: string;
export const CRUD_GET_ONE_SUCCESS: string;
export const CRUD_HIDE_FILTER: string;
export const CRUD_SET_FILTER: string;
export const CRUD_SHOW_FILTER: string;
export const CRUD_UPDATE: string;
export const CRUD_UPDATE_FAILURE: string;
export const CRUD_UPDATE_LOADING: string;
export const CRUD_UPDATE_MANY: string;
export const CRUD_UPDATE_MANY_FAILURE: string;
export const CRUD_UPDATE_MANY_LOADING: string;
export const CRUD_UPDATE_MANY_OPTIMISTIC: string;
export const CRUD_UPDATE_MANY_SUCCESS: string;
export const CRUD_UPDATE_OPTIMISTIC: string;
export const CRUD_UPDATE_SUCCESS: string;
export class CardActions {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace CardActions {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.CardActions.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.CardActions.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.CardActions.Naked.propTypes.classes
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class CardContentInner {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace CardContentInner {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.CardContentInner.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.CardContentInner.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function CheckboxGroupInput(props: any): any;
export namespace CheckboxGroupInput {
    const defaultProps: {
        fullWidth: boolean;
    };
}
export class ChipField {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ChipField {
    class Naked {
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
        shouldComponentUpdate(nextProps: any): any;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class CloneButton {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class Confirm {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Confirm {
    function Naked(_a: any): any;
    namespace Naked {
        const defaultProps: {
            cancel: string;
            classes: {};
            confirm: string;
            confirmColor: string;
            isOpen: boolean;
        };
        namespace propTypes {
            function cancel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function confirm(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function confirmColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function content(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function isOpen(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace isOpen {
                // Too-deep object hierarchy from index.Confirm.Naked.propTypes.isOpen
                const isRequired: any;
            }
            function onClose(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function onConfirm(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class CoreAdmin {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace CoreAdmin {
    namespace childContextTypes {
        function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace authProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace defaultProps {
        class appLayout {
            static defaultProps: {
                theme: any;
            };
            static propTypes: {
                theme: any;
            };
            constructor(props: any);
            componentWillReceiveProps(nextProps: any): void;
            forceUpdate(callback: any): void;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
        class catchAll {
            static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
            6fc570d6bd61383819d0f9e7407c452d: any;
            b768b78919504fba9de2c03545c5cd3a: any;
            d4bd0baacbc52bbd48bbb9eb24344ecd: any;
            muiThemeProviderOptions: any;
        };
            static displayName: string;
            static options: { };
            static propTypes: {
            classes: any;
            innerRef: any;
        };
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace catchAll {
        class Naked {
            // Too-deep object hierarchy from index.CoreAdmin.defaultProps.catchAll.Naked
            static defaultProps: any;
            // Too-deep object hierarchy from index.CoreAdmin.defaultProps.catchAll.Naked
            static displayName: any;
            constructor(...args: any[]);
        }
    }
    class loading {
        static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
        6fc570d6bd61383819d0f9e7407c452d: any;
        b768b78919504fba9de2c03545c5cd3a: any;
        d4bd0baacbc52bbd48bbb9eb24344ecd: any;
        muiThemeProviderOptions: any;
    };
            static displayName: string;
            static options: { };
            static propTypes: {
        classes: any;
        innerRef: any;
    };
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
namespace loading {
    class Naked {
        // Too-deep object hierarchy from index.CoreAdmin.defaultProps.loading.Naked
        static defaultProps: any;
        // Too-deep object hierarchy from index.CoreAdmin.defaultProps.loading.Naked
        static displayName: any;
        constructor(...args: any[]);
    }
}
class loginPage {
    static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
    6fc570d6bd61383819d0f9e7407c452d: any;
    b768b78919504fba9de2c03545c5cd3a: any;
    d4bd0baacbc52bbd48bbb9eb24344ecd: any;
    muiThemeProviderOptions: any;
};
            static displayName: string;
            static options: { };
            static propTypes: {
    classes: any;
    innerRef: any;
};
constructor(props: any, context: any);
attach(theme: any): void;
componentDidMount(): void;
componentDidUpdate(): void;
componentWillUnmount(): void;
detach(theme: any): void;
forceUpdate(callback: any): void;
getClasses(): any;
render(): any;
setState(partialState: any, callback: any): void;
        }
namespace loginPage {
    class Naked {
        // Too-deep object hierarchy from index.CoreAdmin.defaultProps.loginPage.Naked
        static defaultProps: any;
        // Too-deep object hierarchy from index.CoreAdmin.defaultProps.loginPage.Naked
        static propTypes: any;
        constructor(props: any);
    }
}
class logoutButton {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
    }
}
export function CoreAdminRouter(ownerProps: any, context: any): any;
export namespace CoreAdminRouter {
    namespace contextTypes {
        function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace authProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace defaultProps {
        class loading {
            static contextTypes: {
                64a55d578f856d258dc345b094a2a2b3: any;
            6fc570d6bd61383819d0f9e7407c452d: any;
            b768b78919504fba9de2c03545c5cd3a: any;
            d4bd0baacbc52bbd48bbb9eb24344ecd: any;
            muiThemeProviderOptions: any;
        };
            static displayName: string;
            static options: { };
            static propTypes: {
            classes: any;
            innerRef: any;
        };
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace loading {
        class Naked {
            // Too-deep object hierarchy from index.CoreAdminRouter.defaultProps.loading.Naked
            static defaultProps: any;
            // Too-deep object hierarchy from index.CoreAdminRouter.defaultProps.loading.Naked
            static displayName: any;
            constructor(...args: any[]);
        }
    }
}
const displayName: string;
}
export class Create {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Create {
    function Naked(props: any): any;
    namespace Naked {
        namespace propTypes {
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.actions
                const isRequired: any;
            }
            function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace aside {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.aside
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.classes
                const isRequired: any;
            }
            function hasCreate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasCreate {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.hasCreate
                const isRequired: any;
            }
            function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasEdit {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.hasEdit
                const isRequired: any;
            }
            function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasList {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.hasList
                const isRequired: any;
            }
            function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasShow {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.hasShow
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.record
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.Create.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function CreateActions(_a: any): any;
export namespace CreateActions {
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class CreateButton {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class CreateController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace CreateController {
    class WrappedComponent {
        static defaultProps: {
            record: {};
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function CreateView(_a: any): any;
export namespace CreateView {
    const defaultProps: {
        classes: {};
    };
    namespace propTypes {
        function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace actions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace aside {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasShow {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function redirect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace redirect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function save(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace save {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const DEFAULT_LOCALE: string;
export const DELETE: string;
export const DELETE_MANY: string;
export class DashboardMenuItem {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class Datagrid {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Datagrid {
    class Naked {
        static defaultProps: {
            body: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            data: {};
            hasBulkActions: boolean;
            ids: any[];
            selectedIds: any[];
        };
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.basePath
                const isRequired: any;
            }
            function body(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.classes
                const isRequired: any;
            }
            function currentSort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hasBulkActions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hover(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hover {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.hover
                const isRequired: any;
            }
            function ids(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function isLoading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace isLoading {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.isLoading
                const isRequired: any;
            }
            function onSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onSelect {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.onSelect
                const isRequired: any;
            }
            function onToggleItem(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onToggleItem {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.onToggleItem
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.resource
                const isRequired: any;
            }
            function rowClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace rowClick {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.rowClick
                const isRequired: any;
            }
            function rowStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace rowStyle {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.rowStyle
                const isRequired: any;
            }
            function selectedIds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function setSort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace setSort {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.setSort
                const isRequired: any;
            }
            function total(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace total {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.total
                const isRequired: any;
            }
            function version(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace version {
                // Too-deep object hierarchy from index.Datagrid.Naked.propTypes.version
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class DatagridBody {
    static displayName: string;
    static muiName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function DatagridCell(_a: any): any;
export namespace DatagridCell {
    const displayName: string;
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function field(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace field {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class DatagridHeaderCell {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class DatagridRow {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace DatagridRow {
    class WrappedComponent {
        static defaultProps: {
            hasBulkActions: boolean;
            hover: boolean;
            record: {};
            selected: boolean;
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.basePath
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function hasBulkActions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hover(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hover {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.hover
                const isRequired: any;
            }
            function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace id {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.id
                const isRequired: any;
            }
            function onToggleItem(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onToggleItem {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.onToggleItem
                const isRequired: any;
            }
            function push(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace push {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.push
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.resource
                const isRequired: any;
            }
            function rowClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace rowClick {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.rowClick
                const isRequired: any;
            }
            function selected(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace selected {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.selected
                const isRequired: any;
            }
            function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace style {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.style
                const isRequired: any;
            }
            function styles(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace styles {
                // Too-deep object hierarchy from index.DatagridRow.WrappedComponent.propTypes.styles
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class DateField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function DateInput(props: any): any;
export function DateTimeInput(props: any): any;
export class DeleteButton {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace DeleteButton {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function DisabledInput(props: any): any;
export class Edit {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Edit {
    function Naked(props: any): any;
    namespace Naked {
        namespace propTypes {
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.actions
                const isRequired: any;
            }
            function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace aside {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.aside
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.classes
                const isRequired: any;
            }
            function hasCreate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasCreate {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.hasCreate
                const isRequired: any;
            }
            function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasEdit {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.hasEdit
                const isRequired: any;
            }
            function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasList {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.hasList
                const isRequired: any;
            }
            function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasShow {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.hasShow
                const isRequired: any;
            }
            function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.Edit.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function EditActions(_a: any): any;
export namespace EditActions {
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace data {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasShow {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class EditButton {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class EditController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace EditController {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class EditGuesser {
    static Naked(props: any): any;
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace EditGuesser {
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function EditView(_a: any): any;
export namespace EditView {
    const defaultProps: {
        classes: {};
    };
    namespace propTypes {
        function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace actions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace aside {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasShow {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function redirect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace redirect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function save(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace save {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function version(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace version {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class EmailField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class Error {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Error {
    class Naked {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ExportButton {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ExportButton {
    class WrappedComponent {
        static defaultProps: {
            icon: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            label: string;
            maxResults: number;
        };
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.basePath
                const isRequired: any;
            }
            function dispatch(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace dispatch {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.dispatch
                const isRequired: any;
            }
            function exporter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace exporter {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.exporter
                const isRequired: any;
            }
            function filter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filter {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.filter
                const isRequired: any;
            }
            function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace icon {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.icon
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.label
                const isRequired: any;
            }
            function maxResults(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sort {
                // Too-deep object hierarchy from index.ExportButton.WrappedComponent.propTypes.sort
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const FETCH_CANCEL: string;
export const FETCH_END: string;
export const FETCH_ERROR: string;
export const FETCH_START: string;
export class FieldTitle {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class FileField {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace FileField {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.addLabel
                const isRequired: any;
            }
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.basePath
                const isRequired: any;
            }
            function cellClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace cellClassName {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.cellClassName
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.classes
                const isRequired: any;
            }
            function headerClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace headerClassName {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.headerClassName
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.record
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function src(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace src {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.src
                const isRequired: any;
            }
            function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace target {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.target
                const isRequired: any;
            }
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.FileField.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function FileInput(props: any): any;
export class Filter {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Filter {
    class Naked {
        static defaultProps: {
            debounce: number;
        };
        constructor(props: any);
        forceUpdate(callback: any): void;
        render(): any;
        renderButton(): any;
        renderForm(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.children
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.classes
                const isRequired: any;
            }
            function context(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace context {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.context
                const isRequired: any;
            }
            function debounce(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function displayedFilters(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace displayedFilters {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.displayedFilters
                const isRequired: any;
            }
            function filterValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filterValues {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.filterValues
                const isRequired: any;
            }
            function hideFilter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hideFilter {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.hideFilter
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function setFilters(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace setFilters {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.setFilters
                const isRequired: any;
            }
            function showFilter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace showFilter {
                // Too-deep object hierarchy from index.Filter.Naked.propTypes.showFilter
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class FilterButton {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class FilterForm {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace FilterForm {
    function Naked(props: any): any;
    namespace Naked {
        const displayName: string;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function FormDataConsumer(props: any): any;
export class FormField {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace FormField {
    class WrappedComponent {
        constructor(...args: any[]);
        componentDidMount(): void;
        componentDidUpdate(prevProps: any): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function decoratedComponent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace decoratedComponent {
                // Too-deep object hierarchy from index.FormField.WrappedComponent.propTypes.decoratedComponent
                const isRequired: any;
            }
            function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace defaultValue {
                // Too-deep object hierarchy from index.FormField.WrappedComponent.propTypes.defaultValue
                const isRequired: any;
            }
            function initializeForm(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function input(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace input {
                // Too-deep object hierarchy from index.FormField.WrappedComponent.propTypes.input
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace source {
                // Too-deep object hierarchy from index.FormField.WrappedComponent.propTypes.source
                const isRequired: any;
            }
            function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace validate {
                // Too-deep object hierarchy from index.FormField.WrappedComponent.propTypes.validate
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class FormInput {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace FormInput {
    function Naked(_a: any): any;
    namespace Naked {
        const displayName: string;
        namespace propTypes {
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.FormInput.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.FormInput.Naked.propTypes.classes
                const isRequired: any;
            }
            function input(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace input {
                // Too-deep object hierarchy from index.FormInput.Naked.propTypes.input
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class FormTab {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class FunctionField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export const GET_LIST: string;
export const GET_MANY: string;
export const GET_MANY_REFERENCE: string;
export const GET_ONE: string;
export const HIDE_NOTIFICATION: string;
export class Header {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Header {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function actionProps(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actionProps {
                // Too-deep object hierarchy from index.Header.Naked.propTypes.actionProps
                const isRequired: any;
            }
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.Header.Naked.propTypes.actions
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Header.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Header.Naked.propTypes.classes
                const isRequired: any;
            }
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.Header.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function Headroom(_a: any): any;
export namespace Headroom {
    namespace propTypes {
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
}
export class HttpError {
    static captureStackTrace(p0: any, p1: any): any;
    static stackTraceLimit: number;
    constructor(message: any, status: any, body: any);
}
export const INITIALIZE_FORM: string;
export class ImageField {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ImageField {
    function Naked(_a: any): any;
    namespace Naked {
        const displayName: string;
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.addLabel
                const isRequired: any;
            }
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.basePath
                const isRequired: any;
            }
            function cellClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace cellClassName {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.cellClassName
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.classes
                const isRequired: any;
            }
            function headerClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace headerClassName {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.headerClassName
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.record
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function src(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace src {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.src
                const isRequired: any;
            }
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.ImageField.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function ImageInput(props: any): any;
export class InferredElement {
    constructor(type: any, props: any, children: any);
    type: any;
    props: any;
    children: any;
    getElement(props: any): any;
    getProps(): any;
    getRepresentation(): any;
    isDefined(): any;
}
export class Labeled {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Labeled {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.basePath
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.classes
                const isRequired: any;
            }
            function fullWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace fullWidth {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.fullWidth
                const isRequired: any;
            }
            function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace id {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.id
                const isRequired: any;
            }
            function input(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace input {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.input
                const isRequired: any;
            }
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace isRequired {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.isRequired
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.label
                const isRequired: any;
            }
            function labelStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace labelStyle {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.labelStyle
                const isRequired: any;
            }
            function meta(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace meta {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.meta
                const isRequired: any;
            }
            function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onChange {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.onChange
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.record
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.resource
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace source {
                // Too-deep object hierarchy from index.Labeled.Naked.propTypes.source
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Layout {
    static defaultProps: {
        theme: {
            palette: {
                secondary: any;
            };
            typography: {
                title: any;
            };
        };
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Layout {
    namespace propTypes {
        function theme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace theme {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class LinearProgress {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace LinearProgress {
    function Naked(_a: any): any;
    namespace Naked {
        const displayName: string;
        namespace propTypes {
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.LinearProgress.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.LinearProgress.Naked.propTypes.classes
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Link {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Link {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Link.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Link.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Link.Naked.propTypes.classes
                const isRequired: any;
            }
            function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace to {
                // Too-deep object hierarchy from index.Link.Naked.propTypes.to
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class List {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace List {
    function Naked(props: any): any;
    namespace Naked {
        const defaultProps: {
            filter: {};
            perPage: number;
            theme: {
                palette: any;
                typography: any;
            };
        };
        namespace propTypes {
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.List.Naked.propTypes.actions
                const isRequired: any;
            }
            function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace aside {
                // Too-deep object hierarchy from index.List.Naked.propTypes.aside
                const isRequired: any;
            }
            function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace authProvider {
                // Too-deep object hierarchy from index.List.Naked.propTypes.authProvider
                const isRequired: any;
            }
            function bulkActionButtons(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace bulkActionButtons {
                // Too-deep object hierarchy from index.List.Naked.propTypes.bulkActionButtons
                const isRequired: any;
            }
            function bulkActions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace bulkActions {
                // Too-deep object hierarchy from index.List.Naked.propTypes.bulkActions
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.List.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.List.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.List.Naked.propTypes.classes
                const isRequired: any;
            }
            function filter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filter {
                // Too-deep object hierarchy from index.List.Naked.propTypes.filter
                const isRequired: any;
            }
            function filterDefaultValues(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filterDefaultValues {
                // Too-deep object hierarchy from index.List.Naked.propTypes.filterDefaultValues
                const isRequired: any;
            }
            function filters(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filters {
                // Too-deep object hierarchy from index.List.Naked.propTypes.filters
                const isRequired: any;
            }
            function hasCreate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function location(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function match(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function pagination(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace pagination {
                // Too-deep object hierarchy from index.List.Naked.propTypes.pagination
                const isRequired: any;
            }
            function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace path {
                // Too-deep object hierarchy from index.List.Naked.propTypes.path
                const isRequired: any;
            }
            function perPage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sort {
                // Too-deep object hierarchy from index.List.Naked.propTypes.sort
                const isRequired: any;
            }
            function theme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.List.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ListActions {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function ListButton(_a: any): any;
export namespace ListButton {
    const defaultProps: {
        icon: {
            $$typeof: symbol;
            key: {};
            props: {};
            ref: {};
            type: Function;
        };
    };
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace icon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ListController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ListController {
    class WrappedComponent {
        static defaultProps: {
            debounce: number;
            filter: {};
            filterValues: {};
            perPage: number;
            sort: {
                field: any;
                order: any;
            };
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ListGuesser {
    static Naked(props: any): any;
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ListGuesser {
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ListToolbar {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ListToolbar {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.ListToolbar.Naked.propTypes.actions
                const isRequired: any;
            }
            function bulkActions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace bulkActions {
                // Too-deep object hierarchy from index.ListToolbar.Naked.propTypes.bulkActions
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ListToolbar.Naked.propTypes.classes
                const isRequired: any;
            }
            function exporter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace exporter {
                // Too-deep object hierarchy from index.ListToolbar.Naked.propTypes.exporter
                const isRequired: any;
            }
            function filters(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filters {
                // Too-deep object hierarchy from index.ListToolbar.Naked.propTypes.filters
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Loading {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Loading {
    class Naked {
        static defaultProps: {
            loadingPrimary: string;
            loadingSecondary: string;
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class LoadingIndicator {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace LoadingIndicator {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.LoadingIndicator.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.LoadingIndicator.Naked.propTypes.classes
                const isRequired: any;
            }
            function isLoading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace isLoading {
                // Too-deep object hierarchy from index.LoadingIndicator.Naked.propTypes.isLoading
                const isRequired: any;
            }
            function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace width {
                // Too-deep object hierarchy from index.LoadingIndicator.Naked.propTypes.width
                const isRequired: any;
            }
        }
    }
    class WrappedComponent {
        static displayName: string;
        static options: {};
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        function Naked(_a: any): any;
        namespace Naked {
            const propTypes: {
                className: any;
                classes: any;
                isLoading: any;
                width: any;
            };
        }
        namespace contextTypes {
            function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace b768b78919504fba9de2c03545c5cd3a {
                // Too-deep object hierarchy from index.LoadingIndicator.WrappedComponent.contextTypes.b768b78919504fba9de2c03545c5cd3a
                const isRequired: any;
            }
            function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
                // Too-deep object hierarchy from index.LoadingIndicator.WrappedComponent.contextTypes.d4bd0baacbc52bbd48bbb9eb24344ecd
                const isRequired: any;
            }
            function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace muiThemeProviderOptions {
                // Too-deep object hierarchy from index.LoadingIndicator.WrappedComponent.contextTypes.muiThemeProviderOptions
                const isRequired: any;
            }
        }
        namespace propTypes {
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.LoadingIndicator.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace innerRef {
                // Too-deep object hierarchy from index.LoadingIndicator.WrappedComponent.propTypes.innerRef
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Login {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Login {
    class Naked {
        static defaultProps: {
            backgroundImage: string;
            loginForm: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            theme: {
                palette: any;
                typography: any;
            };
        };
        constructor(props: any);
        componentDidMount(): void;
        componentDidUpdate(): void;
        forceUpdate(callback: any): void;
        lazyLoadBackgroundImage(): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace authProvider {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.authProvider
                const isRequired: any;
            }
            function backgroundImage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace backgroundImage {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.backgroundImage
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.classes
                const isRequired: any;
            }
            function input(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace input {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.input
                const isRequired: any;
            }
            function loginForm(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace loginForm {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.loginForm
                const isRequired: any;
            }
            function meta(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace meta {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.meta
                const isRequired: any;
            }
            function previousRoute(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace previousRoute {
                // Too-deep object hierarchy from index.Login.Naked.propTypes.previousRoute
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class LoginForm {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace LoginForm {
    class Naked {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Logout {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function LongTextInput(props: any): any;
export namespace LongTextInput {
    const defaultProps: {
        fullWidth: boolean;
        options: {};
    };
}
export class Menu {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class MenuItemLink {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace MenuItemLink {
    class Naked {
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.MenuItemLink.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function leftIcon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace leftIcon {
                // Too-deep object hierarchy from index.MenuItemLink.Naked.propTypes.leftIcon
                const isRequired: any;
            }
            function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onClick {
                // Too-deep object hierarchy from index.MenuItemLink.Naked.propTypes.onClick
                const isRequired: any;
            }
            function primaryText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace primaryText {
                // Too-deep object hierarchy from index.MenuItemLink.Naked.propTypes.primaryText
                const isRequired: any;
            }
            function staticContext(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace staticContext {
                // Too-deep object hierarchy from index.MenuItemLink.Naked.propTypes.staticContext
                const isRequired: any;
            }
            function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class NotFound {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace NotFound {
    class Naked {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Notification {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function NullableBooleanInput(props: any): any;
export class NumberField {
    static defaultProps: {
        addLabel: boolean;
        textAlign: string;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function NumberInput(props: any): any;
export namespace NumberInput {
    const defaultProps: {
        textAlign: string;
    };
}
export class Pagination {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class PaginationLimit {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export const REDUX_FORM_NAME: string;
export const REFRESH_VIEW: string;
export const REGISTER_RESOURCE: string;
export const RESET_FORM: string;
export function RadioButtonGroupInput(props: any): any;
export function RecordTitle(_a: any): any;
export namespace RecordTitle {
    namespace propTypes {
        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ReferenceArrayField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ReferenceArrayField {
    function Naked(_a: any): any;
    namespace Naked {
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ReferenceArrayField.Naked.propTypes.addLabel
                const isRequired: any;
            }
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ReferenceArrayField.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ReferenceArrayField.Naked.propTypes.classes
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ReferenceArrayField.Naked.propTypes.label
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceArrayField.Naked.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ReferenceArrayFieldController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ReferenceArrayFieldController {
    class WrappedComponent {
        constructor(...args: any[]);
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: any): void;
        fetchReferences(_a: any): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.addLabel
                const isRequired: any;
            }
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function crudGetManyAccumulate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace data {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.data
                const isRequired: any;
            }
            function ids(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.label
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceArrayFieldController.WrappedComponent.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function ReferenceArrayInput(props: any): any;
export class ReferenceArrayInputController {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ReferenceArrayInputController {
    namespace defaultProps {
        function referenceSource(resource: any, source: any): any;
    }
}
export class ReferenceField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ReferenceField {
    function Naked(_a: any): any;
    namespace Naked {
        const defaultProps: {
            allowEmpty: boolean;
            classes: {};
            linkType: string;
            record: {};
        };
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.addLabel
                const isRequired: any;
            }
            function allowEmpty(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function cellClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace cellClassName {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.cellClassName
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.classes
                const isRequired: any;
            }
            function headerClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace headerClassName {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.headerClassName
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.label
                const isRequired: any;
            }
            function linkType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.record
                const isRequired: any;
            }
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.resource
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function translateChoice(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace translateChoice {
                // Too-deep object hierarchy from index.ReferenceField.Naked.propTypes.translateChoice
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ReferenceFieldController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ReferenceFieldController {
    class WrappedComponent {
        static defaultProps: {
            allowEmpty: boolean;
            classes: {};
            linkType: string;
            record: {};
            referenceRecord: {};
        };
        constructor(...args: any[]);
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: any): void;
        fetchReference(props: any): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.addLabel
                const isRequired: any;
            }
            function allowEmpty(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function cellClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace cellClassName {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.cellClassName
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function crudGetManyAccumulate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function headerClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace headerClassName {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.headerClassName
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.label
                const isRequired: any;
            }
            function linkType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.record
                const isRequired: any;
            }
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function referenceRecord(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace referenceRecord {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.referenceRecord
                const isRequired: any;
            }
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.resource
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function translateChoice(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace translateChoice {
                // Too-deep object hierarchy from index.ReferenceFieldController.WrappedComponent.propTypes.translateChoice
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function ReferenceInput(props: any): any;
export class ReferenceInputController {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ReferenceInputController {
    namespace defaultProps {
        function referenceSource(resource: any, source: any): any;
    }
}
export class ReferenceManyField {
    static defaultProps: {
        addLabel: boolean;
        source: string;
    };
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ReferenceManyField {
    function Naked(_a: any): any;
    namespace Naked {
        const defaultProps: {
            filter: {};
            perPage: number;
            sort: {
                field: any;
                order: any;
            };
            source: string;
        };
        namespace propTypes {
            function addLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace addLabel {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.addLabel
                const isRequired: any;
            }
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.classes
                const isRequired: any;
            }
            function filter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filter {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.filter
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.label
                const isRequired: any;
            }
            function perPage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace perPage {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.perPage
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.record
                const isRequired: any;
            }
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sort {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.sort
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceManyField.Naked.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ReferenceManyFieldController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ReferenceManyFieldController {
    class WrappedComponent {
        static defaultProps: {
            filter: {};
            perPage: number;
            sort: {
                field: any;
                order: any;
            };
            source: string;
        };
        constructor(props: any);
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: any): void;
        fetchReferences(_a: any): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function crudGetManyReference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace data {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.data
                const isRequired: any;
            }
            function filter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace filter {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.filter
                const isRequired: any;
            }
            function ids(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace ids {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.ids
                const isRequired: any;
            }
            function isLoading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace isLoading {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.isLoading
                const isRequired: any;
            }
            function perPage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace perPage {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.perPage
                const isRequired: any;
            }
            function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace record {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.record
                const isRequired: any;
            }
            function reference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function sort(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sort {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.sort
                const isRequired: any;
            }
            function sortBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace sortBy {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.sortBy
                const isRequired: any;
            }
            function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function total(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace total {
                // Too-deep object hierarchy from index.ReferenceManyFieldController.WrappedComponent.propTypes.total
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class RefreshButton {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace RefreshButton {
    class WrappedComponent {
        static defaultProps: {
            icon: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            label: string;
        };
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace icon {
                // Too-deep object hierarchy from index.RefreshButton.WrappedComponent.propTypes.icon
                const isRequired: any;
            }
            function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace label {
                // Too-deep object hierarchy from index.RefreshButton.WrappedComponent.propTypes.label
                const isRequired: any;
            }
            function refreshView(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class RefreshIconButton {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace RefreshIconButton {
    class WrappedComponent {
        static defaultProps: {
            icon: {
                $$typeof: any;
                key: any;
                props: any;
                ref: any;
                type: any;
            };
            label: string;
        };
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ResettableTextField {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class Resource {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace Resource {
    class WrappedComponent {
        static defaultProps: {
            context: string;
            options: {};
        };
        constructor(...args: any[]);
        componentWillMount(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        namespace propTypes {
            function context(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function create(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace create {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.create
                const isRequired: any;
            }
            function edit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace edit {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.edit
                const isRequired: any;
            }
            function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace icon {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.icon
                const isRequired: any;
            }
            function list(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace list {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.list
                const isRequired: any;
            }
            function match(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace match {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.match
                const isRequired: any;
            }
            function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace options {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.options
                const isRequired: any;
            }
            function registerResource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace show {
                // Too-deep object hierarchy from index.Resource.WrappedComponent.propTypes.show
                const isRequired: any;
            }
            function unregisterResource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Responsive {
    static contextTypes: {};
    static displayName: string;
    constructor(props: any, context: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Responsive {
    class Naked {
        static displayName: string;
        constructor(props: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        getWidth(...args: any[]): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function initialWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace initialWidth {
                // Too-deep object hierarchy from index.Responsive.Naked.propTypes.initialWidth
                const isRequired: any;
            }
            function theme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace width {
                // Too-deep object hierarchy from index.Responsive.Naked.propTypes.width
                const isRequired: any;
            }
        }
    }
}
export class RichTextField {
    static defaultProps: {
        addLabel: boolean;
        stripTags: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function RoutesWithLayout(_a: any): any;
export namespace RoutesWithLayout {
    namespace propTypes {
        function catchAll(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace catchAll {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function customRoutes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace customRoutes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function dashboard(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace dashboard {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const SET_LIST_SELECTED_IDS: string;
export const SET_SIDEBAR_VISIBILITY: string;
export const SHOW_NOTIFICATION: string;
export const START_OPTIMISTIC_MODE: string;
export const STOP_OPTIMISTIC_MODE: string;
export class SaveButton {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class SearchInput {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function SelectArrayInput(props: any): any;
export class SelectField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function SelectInput(props: any): any;
export class Show {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Show {
    function Naked(props: any): any;
    namespace Naked {
        namespace propTypes {
            function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace actions {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.actions
                const isRequired: any;
            }
            function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace aside {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.aside
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace children {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.children
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.classes
                const isRequired: any;
            }
            function hasCreate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasCreate {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.hasCreate
                const isRequired: any;
            }
            function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasEdit {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.hasEdit
                const isRequired: any;
            }
            function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasList {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.hasList
                const isRequired: any;
            }
            function hasShow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace hasShow {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.hasShow
                const isRequired: any;
            }
            function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace title {
                // Too-deep object hierarchy from index.Show.Naked.propTypes.title
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function ShowActions(_a: any): any;
export namespace ShowActions {
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace data {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasEdit {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ShowButton {
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class ShowController {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace ShowController {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class ShowGuesser {
    static Naked(props: any): any;
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace ShowGuesser {
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function ShowView(_a: any): any;
export namespace ShowView {
    const defaultProps: {
        classes: {};
    };
    namespace propTypes {
        function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace actions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function aside(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace aside {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasEdit {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hasList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hasList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function isLoading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace isLoading {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function version(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace version {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Sidebar {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace Sidebar {
    class Naked {
        static contextTypes: {};
        static displayName: string;
        constructor(props: any, context: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        class Naked {
            static displayName: string;
            static propTypes: {
                initialWidth: any;
                theme: any;
                width: any;
            };
            constructor(props: any);
            componentDidMount(): void;
            componentWillUnmount(): void;
            forceUpdate(callback: any): void;
            getWidth(...args: any[]): any;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
    }
    class WrappedComponent {
        static displayName: string;
        static options: {};
        constructor(props: any, context: any);
        attach(theme: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        detach(theme: any): void;
        forceUpdate(callback: any): void;
        getClasses(): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace WrappedComponent {
        class Naked {
            static contextTypes: {};
            static displayName: string;
            constructor(props: any, context: any);
            componentDidMount(): void;
            componentWillUnmount(): void;
            forceUpdate(callback: any): void;
            render(): any;
            setState(partialState: any, callback: any): void;
        }
        namespace Naked {
            class Naked {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.Naked.Naked
                static displayName: any;
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.Naked.Naked
                static propTypes: any;
                constructor(props: any);
            }
        }
        namespace contextTypes {
            function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace b768b78919504fba9de2c03545c5cd3a {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.contextTypes.b768b78919504fba9de2c03545c5cd3a
                const isRequired: any;
            }
            function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.contextTypes.d4bd0baacbc52bbd48bbb9eb24344ecd
                const isRequired: any;
            }
            function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace muiThemeProviderOptions {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.contextTypes.muiThemeProviderOptions
                const isRequired: any;
            }
        }
        namespace propTypes {
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.propTypes.classes
                const isRequired: any;
            }
            function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace innerRef {
                // Too-deep object hierarchy from index.Sidebar.WrappedComponent.propTypes.innerRef
                const isRequired: any;
            }
        }
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class SimpleForm {
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace SimpleForm {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class SimpleFormIterator {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export class SimpleList {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace SimpleList {
    function Naked(_a: any): any;
    namespace Naked {
        const defaultProps: {
            hasBulkActions: boolean;
            linkType: string;
            selectedIds: any[];
        };
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.basePath
                const isRequired: any;
            }
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.classes
                const isRequired: any;
            }
            function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace data {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.data
                const isRequired: any;
            }
            function hasBulkActions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function ids(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace ids {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.ids
                const isRequired: any;
            }
            function leftAvatar(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace leftAvatar {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.leftAvatar
                const isRequired: any;
            }
            function leftIcon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace leftIcon {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.leftIcon
                const isRequired: any;
            }
            function linkType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function onToggleItem(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace onToggleItem {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.onToggleItem
                const isRequired: any;
            }
            function primaryText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace primaryText {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.primaryText
                const isRequired: any;
            }
            function rightAvatar(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace rightAvatar {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.rightAvatar
                const isRequired: any;
            }
            function rightIcon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace rightIcon {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.rightIcon
                const isRequired: any;
            }
            function secondaryText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace secondaryText {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.secondaryText
                const isRequired: any;
            }
            function selectedIds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function tertiaryText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace tertiaryText {
                // Too-deep object hierarchy from index.SimpleList.Naked.propTypes.tertiaryText
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function SimpleShowLayout(_a: any): any;
export namespace SimpleShowLayout {
    namespace propTypes {
        function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace basePath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resource {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function version(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace version {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class SingleFieldList {
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    attach(theme: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    detach(theme: any): void;
    forceUpdate(callback: any): void;
    getClasses(): any;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace SingleFieldList {
    class Naked {
        static defaultProps: {
            classes: {};
            linkType: string;
        };
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        namespace propTypes {
            function basePath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace basePath {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.basePath
                const isRequired: any;
            }
            function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace className {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.className
                const isRequired: any;
            }
            function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace classes {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.classes
                const isRequired: any;
            }
            function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace data {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.data
                const isRequired: any;
            }
            function ids(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace ids {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.ids
                const isRequired: any;
            }
            function linkType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function resource(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace resource {
                // Too-deep object hierarchy from index.SingleFieldList.Naked.propTypes.resource
                const isRequired: any;
            }
        }
    }
    namespace contextTypes {
        function b768b78919504fba9de2c03545c5cd3a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace b768b78919504fba9de2c03545c5cd3a {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function d4bd0baacbc52bbd48bbb9eb24344ecd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace d4bd0baacbc52bbd48bbb9eb24344ecd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function muiThemeProviderOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace muiThemeProviderOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function classes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace classes {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function innerRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace innerRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const TOGGLE_LIST_ITEM: string;
export const TOGGLE_SIDEBAR: string;
export class Tab {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function TabbedForm(props: any): any;
export namespace TabbedForm {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    const displayName: string;
    namespace propTypes {
        function wrappedComponentRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace wrappedComponentRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function TabbedShowLayout(props: any): any;
export namespace TabbedShowLayout {
    class WrappedComponent {
        static defaultProps: {};
        static displayName: string;
        constructor(...args: any[]);
        forceUpdate(callback: any): void;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    const displayName: string;
    namespace propTypes {
        function wrappedComponentRef(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace wrappedComponentRef {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export function TestContext(_a: any): any;
export namespace TestContext {
    const defaultProps: {
        store: {};
    };
    namespace propTypes {
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class TextField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export function TextInput(props: any): any;
export class Title {
    static defaultProps: {};
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function TitleForRecord(_a: any): any;
export namespace TitleForRecord {
    namespace propTypes {
        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function record(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace record {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Toolbar {
    static contextTypes: {};
    static displayName: string;
    static options: {};
    constructor(props: any, context: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Toolbar {
    class Naked {
        static displayName: string;
        static options: {};
        constructor(props: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        getWidth(...args: any[]): any;
        render(): any;
        setState(partialState: any, callback: any): void;
    }
    namespace Naked {
        function Naked(_a: any): any;
        namespace Naked {
            const defaultProps: {
                submitOnEnter: any;
            };
            const propTypes: {
                basePath: any;
                children: any;
                className: any;
                classes: any;
                handleSubmit: any;
                handleSubmitWithRedirect: any;
                invalid: any;
                pristine: any;
                record: any;
                redirect: any;
                resource: any;
                saving: any;
                submitOnEnter: any;
                width: any;
            };
        }
        namespace propTypes {
            function initialWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace initialWidth {
                // Too-deep object hierarchy from index.Toolbar.Naked.propTypes.initialWidth
                const isRequired: any;
            }
            function theme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
            namespace width {
                // Too-deep object hierarchy from index.Toolbar.Naked.propTypes.width
                const isRequired: any;
            }
        }
    }
}
export class TranslationProvider {
    static WrappedComponent(props: any): any;
    static displayName: string;
    constructor(props: any, context: any);
    addExtraProps(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentWillUpdate(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    getWrappedInstance(): any;
    initSelector(): void;
    initSubscription(): void;
    isSubscribed(): any;
    notifyNestedSubsOnComponentDidUpdate(): void;
    onStateChange(): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    setWrappedInstance(ref: any): void;
    shouldComponentUpdate(): any;
}
export namespace TranslationProvider {
    namespace childContextTypes {
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace contextTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function store(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace store {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function storeSubscription(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace storeSubscription {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export const UNDO: string;
export const UNDOABLE: string;
export const UNREGISTER_RESOURCE: string;
export const UPDATE: string;
export const UPDATE_MANY: string;
export const USER_CHECK: string;
export const USER_CHECK_SUCCESS: string;
export const USER_LOGIN: string;
export const USER_LOGIN_FAILURE: string;
export const USER_LOGIN_LOADING: string;
export const USER_LOGIN_SUCCESS: string;
export const USER_LOGOUT: string;
export class UrlField {
    static defaultProps: {
        addLabel: boolean;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
    shouldComponentUpdate(nextProps: any): any;
}
export class UserMenu {
    static defaultProps: {
        icon: {
            $$typeof: symbol;
            key: {};
            props: {};
            ref: {};
            type: Function;
        };
        label: string;
    };
    static displayName: string;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export function ViewTitle(_a: any): any;
export namespace ViewTitle {
    namespace propTypes {
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
}
export function WithPermissions(ownerProps: any, context: any): any;
export namespace WithPermissions {
    namespace contextTypes {
        function authProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace authProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    const displayName: string;
}
export function accumulateSaga(): any;
export function addField(BaseComponent: any, fieldProps: any): any;
export function adminReducer(...args: any[]): any;
export function adminSaga(dataProvider: any, authProvider: any, i18nProvider: any): any;
export function authSaga(authProvider: any): any;
export function beforeLocationChange(_a: any): any;
export function callbackSaga(): any;
export function changeListParams(resource: any, params: any): any;
export function changeLocale(locale: any): any;
export function changeLocaleFailure(locale: any, error: any): any;
export function changeLocaleSuccess(locale: any, messages: any): any;
export function choices(...args: any[]): any;
export namespace choices {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function complete(): any;
export function createAdminStore(_a: any): any;
export function createAppReducer(customReducers: any, locale: any, messages: any): any;
export function crudCreate(resource: any, data: any, basePath: any, redirectTo: any): any;
export function crudDelete(resource: any, id: any, previousData: any, basePath: any, redirectTo: any): any;
export function crudDeleteMany(resource: any, ids: any, basePath: any, refresh: any): any;
export function crudGetAll(resource: any, sort: any, filter: any, maxResults: any, callback: any): any;
export function crudGetList(resource: any, pagination: any, sort: any, filter: any): any;
export function crudGetMany(resource: any, ids: any): any;
export function crudGetManyAccumulate(resource: any, ids: any): any;
export function crudGetManyReference(reference: any, target: any, id: any, relatedTo: any, pagination: any, sort: any, filter: any, source: any): any;
export function crudGetMatching(reference: any, relatedTo: any, pagination: any, sort: any, filter: any): any;
export function crudGetMatchingAccumulate(reference: any, relatedTo: any, pagination: any, sort: any, filter: any): any;
export function crudGetOne(resource: any, id: any, basePath: any, refresh: any): any;
export function crudUpdate(resource: any, id: any, data: any, previousData: any, basePath: any, redirectTo: any): any;
export function crudUpdateMany(resource: any, ids: any, data: any, basePath: any, refresh: any): any;
export function defaultI18nProvider(locale: any): any;
export const defaultTheme: {
    palette: {
        secondary: {
            contrastText: string;
            dark: string;
            light: string;
            main: string;
        };
    };
    typography: {
        title: {
            fontWeight: number;
        };
    };
};
export function downloadCSV(csv: any, filename: any): void;
export function email(...args: any[]): any;
export namespace email {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function errorSaga(): any;
export const fetchActionsWithArrayOfIdentifiedRecordsResponse: string[];
export const fetchActionsWithArrayOfRecordsResponse: string[];
export const fetchActionsWithRecordResponse: string[];
export const fetchActionsWithTotalResponse: string[];
export function fetchCancel(): any;
export function fetchEnd(): any;
export function fetchError(): any;
export function fetchSaga(dataProvider: any): any;
export function fetchStart(): any;
export namespace fetchUtils {
    function fetchJson(url: any, options: any): any;
    function flattenObject(value: any, path: any): any;
    function queryParameters(obj: any, opts: any): any;
}
export function getDefaultValues(...args: any[]): any;
export namespace getDefaultValues {
    function recomputations(): any;
    function resetRecomputations(): any;
    function resultFunc(record: any, defaultValue: any, defaultValues: any): any;
}
export function getElementsFromRecords(records: any, types: any): any;
export function getFetchedAt(newRecordIds: any, oldRecordFetchedAt: any, now: any, cacheDuration: any): any;
export function getIds(state: any, relatedTo: any): any;
export function getListControllerProps(props: any): any;
export function getLocale(state: any): any;
export function getNotification(state: any): any;
export function getPossibleReferenceValues(state: any, props: any): any;
export function getPossibleReferences(referenceState: any, possibleValues: any, selectedIds: any): any;
export function getReferenceResource(state: any, props: any): any;
export function getReferences(state: any, reference: any, relatedTo: any): any;
export function getReferencesByIds(state: any, reference: any, ids: any): any;
export function getResources(state: any): any;
export function hideFilter(resource: any, field: any): any;
export function hideNotification(): any;
export function i18nReducer(initialLocale: any, defaultMessages: any): any;
export function i18nSaga(i18nProvider: any): any;
export function initializeForm(initialValues: any): any;
export function isRequired(validate: any): any;
export function linkToRecord(basePath: any, id: any, linkType: any): any;
export function maxLength(...args: any[]): any;
export namespace maxLength {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function maxValue(...args: any[]): any;
export namespace maxValue {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function mergeTranslations(...args: any[]): any;
export function minLength(...args: any[]): any;
export namespace minLength {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function minValue(...args: any[]): any;
export namespace minValue {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function nameRelatedTo(reference: any, id: any, resource: any, target: any, filter: any): any;
export function notificationSaga(): any;
export function number(...args: any[]): any;
export namespace number {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function queryReducer(previousState: any, _a: any): any;
export function redirectionSaga(): any;
export function refreshSaga(): any;
export function refreshView(): any;
export function regex(...args: any[]): any;
export namespace regex {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function registerResource(resource: any): any;
export function removeEmpty(object: any): any;
export function removeKey(target: any, path: any): any;
export function required(...args: any[]): any;
export namespace required {
    namespace cache {
        class clear {
            size: any;
        }
        function get(key: any): any;
        function has(key: any): any;
        function set(key: any, value: any): any;
        const size: number;
    }
}
export function resetForm(): any;
export function resolveBrowserLocale(defaultLocale: any): any;
export function resolveRedirectTo(redirectTo: any, basePath: any, id: any, data: any): any;
export function sanitizeListRestProps(props: any): any;
export function setFilter(resource: any, field: any, value: any): any;
export function setListSelectedIds(resource: any, ids: any): any;
export function setSidebarVisibility(isOpen: any): any;
export function showFilter(resource: any, field: any): any;
export function showNotification(message: any, type: any, notificationOptions: any): any;
export function startOptimisticMode(): any;
export function startUndoable(action: any): any;
export function stopOptimisticMode(): any;
export function toggleListItem(resource: any, id: any): any;
export function toggleSidebar(): any;
export function translate(BaseComponent: any): any;
export function undo(): any;
export function undoSaga(): any;
export function unregisterResource(resourceName: any): any;
export function userCheck(payload: any, pathName: any, routeParams: any): any;
export function userLogin(payload: any, pathName: any): any;
export function userLogout(redirectTo: any): any;
export function warning(condition: any, message: any): void;
export function withDefaultValue(DecoratedComponent: any): any;