<template>
<div class=row>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div class="card">
            <div class="card-header" style=" textTransform: 'capitalize', fontWeight: 'bold' ">
                New List
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#add-modal">Add</button>
                </li>
            </ul>
        </div>
    </div>
    <div v-if="loaded" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="item in lists" v-bind:key="item._id">
        <list v-bind:list="item" v-bind:updateList="updateList" v-bind:deleteList="deleteList"></list>
    </div>
    <editmodal v-bind:confirm="addList" v-bind:list="emptyItem" v-bind:id="'add-modal'"></editmodal>
</div>
</template>

<script>
import list from './List'
import editmodal from './EditModal'

export default {
  name: 'lists',
  components: {
    list,
    editmodal
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetch('/api/lists')
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.lists = json
          this.loaded = true
        })
        .catch(ex => {
          console.log('parsing failed', ex)
        })
    },
    updateList (list) {
      fetch('/api/lists', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
      })
        .then(res => {
          this.fetchData()
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteList (id) {
      fetch('/api/lists/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then((json) => {
        let newLists = this.lists.filter(item => {
          return item._id !== json.value._id
        })

        this.lists = newLists
      }).catch((err) => {
        console.log(err)
      })
    },
    addList (list) {
      fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
      }).then((res) => {
        this.fetchData()
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      lists: [],
      loaded: false,
      emptyItem: { name: '', items: [{ name: '', completed: false }] }
    }
  }
}
</script>
