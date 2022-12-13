<script>
	let foo = 'baz'
	let bar = 'qux'
	let result = null
    let params = ''

    const object_rpc = { 
				"jsonrpc":"2.0", 
				"id":"0", 
				"method":"get_transfers",
				"args": ["printlab", 28, "JSON2022", "product.template", "search_read", [], []]
			}
	
	async function getProducts() {
		
        const res = await fetch('https://dev.printlab.mx/jsonrpc', { 
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: { 
				"jsonrpc":"2.0", 
				"method":"call",
				"params": {
                    "service" : "object",
                    "method" : "execute",
                    "args" : ["printlab", 28, "JSON2022", "product.template", "search_read", [], []]
                }
			}
      
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}

    
	
	async function get1() {
        const opts = {
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    service: 'object',
                    method: 'execute',
                    args: ['printlab',28,'JSON2022','product.template','search_read',[],[]]
                }
                
                
            }),
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        };
        await fetch('https://dev.printlab.mx/jsonrpc/', opts);
    }
	
	
	async function doPost2 () {
		const weeklyRequests = await fetch('https://dev.printlab.mx/jsonrpc/', {
			headers: {
				'content-type': 'application/json',
				accept: 'application/json'
			}
		});
		
	}
</script>

<div class="pt-20">

<input bind:value={foo} />
<input bind:value={bar} />
<button type="button" on:click={get1}>
	Post it.
</button>
<p>
	Result:
</p>
<pre>
{result}
</pre>

</div>