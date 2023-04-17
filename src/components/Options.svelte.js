import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/Options.svelte.js");/* src/components/Options.svelte generated by Svelte v3.52.0 */
import {
	SvelteComponentDev,
	add_location,
	append_dev,
	attr_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	listen_dev,
	noop,
	run_all,
	safe_not_equal,
	set_data_dev,
	space,
	text,
	validate_slots
} from "/vendor/.vite-deps-svelte_internal.js__v--dc87137d.js";

import { storage } from "/src/storage.ts.js";
const file = "src/components/Options.svelte";

// (26:8) {#if successMessage}
function create_if_block(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text(/*successMessage*/ ctx[1]);
			attr_dev(span, "class", "success s-ZclnAN89mjA8");
			add_location(span, file, 25, 28, 630);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*successMessage*/ 2) set_data_dev(t, /*successMessage*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(26:8) {#if successMessage}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let p;
	let t0;
	let b;
	let t1;
	let t2;
	let div0;
	let button0;
	let t4;
	let button1;
	let t6;
	let button2;
	let t8;
	let mounted;
	let dispose;
	let if_block = /*successMessage*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			p = element("p");
			t0 = text("Current count: ");
			b = element("b");
			t1 = text(/*count*/ ctx[0]);
			t2 = space();
			div0 = element("div");
			button0 = element("button");
			button0.textContent = "-";
			t4 = space();
			button1 = element("button");
			button1.textContent = "+";
			t6 = space();
			button2 = element("button");
			button2.textContent = "Save";
			t8 = space();
			if (if_block) if_block.c();
			attr_dev(b, "class", "s-ZclnAN89mjA8");
			add_location(b, file, 20, 22, 431);
			attr_dev(p, "class", "s-ZclnAN89mjA8");
			add_location(p, file, 20, 4, 413);
			attr_dev(button0, "class", "s-ZclnAN89mjA8");
			add_location(button0, file, 22, 8, 468);
			attr_dev(button1, "class", "s-ZclnAN89mjA8");
			add_location(button1, file, 23, 8, 516);
			attr_dev(button2, "class", "s-ZclnAN89mjA8");
			add_location(button2, file, 24, 8, 564);
			attr_dev(div0, "class", "s-ZclnAN89mjA8");
			add_location(div0, file, 21, 4, 454);
			attr_dev(div1, "class", "container s-ZclnAN89mjA8");
			add_location(div1, file, 19, 0, 385);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, p);
			append_dev(p, t0);
			append_dev(p, b);
			append_dev(b, t1);
			append_dev(div1, t2);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(div0, t4);
			append_dev(div0, button1);
			append_dev(div0, t6);
			append_dev(div0, button2);
			append_dev(div0, t8);
			if (if_block) if_block.m(div0, null);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*decrement*/ ctx[3], false, false, false),
					listen_dev(button1, "click", /*increment*/ ctx[2], false, false, false),
					listen_dev(button2, "click", /*save*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*count*/ 1) set_data_dev(t1, /*count*/ ctx[0]);

			if (/*successMessage*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Options', slots, []);
	let { count } = $$props;
	let successMessage = null;

	function increment() {
		$$invalidate(0, count += 1);
	}

	function decrement() {
		$$invalidate(0, count -= 1);
	}

	function save() {
		storage.set({ count }).then(() => {
			$$invalidate(1, successMessage = "Options saved!");

			setTimeout(
				() => {
					$$invalidate(1, successMessage = null);
				},
				1500
			);
		});
	}

	$$self.$$.on_mount.push(function () {
		if (count === undefined && !('count' in $$props || $$self.$$.bound[$$self.$$.props['count']])) {
			console.warn("<Options> was created without expected prop 'count'");
		}
	});

	const writable_props = ['count'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Options> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('count' in $$props) $$invalidate(0, count = $$props.count);
	};

	$$self.$capture_state = () => ({
		storage,
		count,
		successMessage,
		increment,
		decrement,
		save
	});

	$$self.$inject_state = $$props => {
		if ('count' in $$props) $$invalidate(0, count = $$props.count);
		if ('successMessage' in $$props) $$invalidate(1, successMessage = $$props.successMessage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [count, successMessage, increment, decrement, save];
}

class Options extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { count: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Options",
			options,
			id: create_fragment.name
		});
	}

	get count() {
		throw new Error("<Options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set count(value) {
		throw new Error("<Options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

import * as ___SVELTE_HMR_HOT_API from '/vendor/svelte-hmr-runtime-hot-api-esm.js__v--dc87137d.js';import { adapter as ___SVELTE_HMR_HOT_API_PROXY_ADAPTER } from '/vendor/svelte-hmr-runtime-proxy-adapter-dom.js__v--dc87137d.js';if (import.meta && import.meta.hot) { if (false) import.meta.hot.acceptExports(['default']);; Options = ___SVELTE_HMR_HOT_API.applyHmr({ m: import.meta, id: "/Users/money/Projects/WebExtensions/SveltePlay/src/components/Options.svelte", hotOptions: {"preserveLocalState":false,"noPreserveStateKey":["@hmr:reset","@!hmr"],"preserveAllLocalStateKey":"@hmr:keep-all","preserveLocalStateKey":"@hmr:keep","noReload":false,"optimistic":false,"acceptNamedExports":true,"acceptAccessors":true,"injectCss":false,"cssEjectDelay":100,"native":false,"importAdapterName":"___SVELTE_HMR_HOT_API_PROXY_ADAPTER","noOverlay":true,"allowLiveBinding":false,"partialAccept":true}, Component: Options, ProxyAdapter: ___SVELTE_HMR_HOT_API_PROXY_ADAPTER, acceptable: true, preserveLocalState: false, emitCss: true, }); }
export default Options;


import "/src/components/Options.svelte__svelte_type--style_lang.css.js";